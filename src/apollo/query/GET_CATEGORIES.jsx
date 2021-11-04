import { gql } from "@apollo/client"
const GET_CATEGORIES = gql`query GET_CATEGORIES {
	productCategories(first: 100) {
		edges {
		  node {
			id
			name
			slug
			count
			image {
			  sourceUrl
			}
			parentId
			children {
			  edges {
				node {
				  id
				  name
				  slug
				  count
				  image {
					sourceUrl
				  }
				}
			  }
			}
		  }
		}
	  }
  }`

export default GET_CATEGORIES