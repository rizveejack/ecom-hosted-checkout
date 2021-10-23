import { gql } from "@apollo/client"
const GET_CATEGORIES = gql`query {
	productCategories(first: 3) {
		nodes {
			id
			name
			slug
			image {
				sourceUrl
				altText
			}
		}
	}
	
}`

export default GET_CATEGORIES