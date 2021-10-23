import { gql } from "@apollo/client"
const PRODUCT_BY_SLUG = gql` query Product($slug: ID!) {
	product(id: $slug, idType: SLUG) {
	  id
	  productId: databaseId
	  averageRating
	  slug
	  description
	  galleryImages {
          nodes {
            id
            title
            altText
            mediaItemUrl
          }
      }
	  image {
		id
		uri
		title
		srcSet
		sourceUrl
	  }
	  name
	  ... on SimpleProduct {
		price
		id
		regularPrice
	  }
	  ... on VariableProduct {
		price
		id
		regularPrice
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
			  price
			  regularPrice
			}
		  }
		}
		id
	  }
	}
  }
`

export default PRODUCT_BY_SLUG