import { gql } from "@apollo/client"
const GET_CATEGORIES = gql`query GET_CATEGORIES {
	productCategories {
		edges {
		  node {
			id
			name
			slug
			count
			parentId
			children {
			  edges {
				node {
				  id
				  name
				  slug
				  count
				}
			  }
			}
		  }
		}
	}
  }`

export default GET_CATEGORIES