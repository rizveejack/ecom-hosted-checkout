import { ApolloClient, ApolloLink, createHttpLink, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

// SETUP YOUR WORDPRESS DOMAIN NAME
const httpLink = createHttpLink({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
    credentials: "include"
});

/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a Session header.
 */
export const middleware = new ApolloLink((operation, forward) => {
    /**
     * If session data exist in local storage, set value as session header.
     */
    const session = process.browser ? localStorage.getItem('woo-session') : null;
    if (session) {
        operation.setContext(({ headers = {} }) => ({
            headers: {
                'woocommerce-session': `Session ${session}`,
            }
        }));
    }

    return forward(operation);
});

/**
 * Afterware operation
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests.
 */
export const afterware = new ApolloLink((operation, forward) => {
    return forward(operation).map((response) => {

        // prevent error from server side rendaring

        if (!process.browser) {
            return response
        }
        /**
         * Check for session header and update session in local storage accordingly. 
         */
        const context = operation.getContext();
        const { response: { headers } } = context;
        const session = headers.get('woocommerce-session');
        if (session) {
            if (localStorage.getItem('woo-session') !== session) {
                localStorage.setItem('woo-session', headers.get('woocommerce-session'));
            }
        }

        return response;
    });
});

const client = new ApolloClient({
    link: middleware.concat(afterware.concat(httpLink)),
    cache: new InMemoryCache({
        // prevent case duplication
        typePolicies: {
            MediaItem: {
                merge: true,
            },
            Query: {
                fields: {
                    products: relayStylePagination(),
                },
            },
            // query for nested object
            ProductCategory: {
                fields: {
                    products: relayStylePagination(),
                },
            }
        }
    })
});

export default client
