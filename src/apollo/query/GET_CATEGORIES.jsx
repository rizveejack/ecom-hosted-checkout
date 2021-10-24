import { gql } from "@apollo/client"
const GET_CATEGORIES = gql`query {
	productCategories(first: 2) {
		nodes {
			id
			name
			slug
			description
			image {
				sourceUrl
				altText
			}
		}
	}
	
}`

export default GET_CATEGORIES