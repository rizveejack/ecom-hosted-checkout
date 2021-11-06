import { gql } from "@apollo/client"

const PRODUCT_BY_CATEGORY = gql`query PRODUCT_BY_CATEGORY($slug: ID!, $first: Int = 4) {
	productCategory(id: $slug, idType: SLUG) {
	  id
	  name
	  slug
	  products(first: $first) {
		edges {
		  node {
			id
			productId: databaseId
			averageRating
			slug
			image {
			  id
			  uri
			  title
			  sourceUrl
			}
			name
			... on SimpleProduct {
			  price
			  regularPrice
			  id
			}
			... on VariableProduct {
			  price
			  regularPrice
			  id
			}
			... on ExternalProduct {
			  price
			  id
			  regularPrice
			  externalUrl
			}
			... on GroupProduct {
			  products {
				nodes {
				  ... on SimpleProduct {
					id
					regularPrice
					price
				  }
				}
			  }
			  id
			}
		  }
		}
		pageInfo {
		  hasNextPage
		  endCursor
		}
	  }
	}
  }
  `
export default PRODUCT_BY_CATEGORY

