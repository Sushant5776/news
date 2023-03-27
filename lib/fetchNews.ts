import { gql } from 'graphql-request'
import sortNewsByImage from './sortNewsByImage'

export default async function fetchNews(
	category?: Category | string,
	keywords?: string,
	isDynamic?: boolean
) {
	const query = gql`
		query myQuery(
			$access_key: String!
			$categories: String!
			$keywords: String
		) {
			myQuery(
				access_key: $access_key
				categories: $categories
				countries: "gb"
				sort: "published_desc"
				keywords: $keywords
			) {
				data {
					country
					description
					image
					language
					published_at
					source
					title
					url
					category
					author
				}
				pagination {
					offset
					total
					count
					limit
				}
			}
		}
	`

	const res = await fetch(
		'https://jacksonvillebeach.stepzen.net/api/kissed-goose/__graphql',
		{
			method: 'POST',
			cache: isDynamic ? 'no-cache' : 'default',
			next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
			},
			body: JSON.stringify({
				query: query,
				variables: {
					access_key: process.env.MEDIASTACK_API_KEY,
					categories: category,
					keywords: keywords,
				},
			}),
		}
	)

	const newsResponse = await res.json()
	const news = sortNewsByImage(newsResponse.data.myQuery)

	return news
}

// stepzen import curl "http://api.mediastack.com/v1/news?access_key=6a93ebfccb244d0ec0f5c3f675628f4d"
