import { ApolloProvider } from "@apollo/client"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import client from "../apollo/client"
import { AppProvider } from "../global/AppProvider"
import "../style/bootstrap.min.css"
import "../style/LineIcons.3.0.css"
import "../style/main.css"


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ApolloProvider>
  )
}

export default MyApp
