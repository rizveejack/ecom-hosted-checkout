import { gql } from "@apollo/client"
const GET_CATEGORIES = gql`query($first: Int = 4) {
	productCategories(first: $first) {
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