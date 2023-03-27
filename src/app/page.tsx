import { categories } from '../../constants'
import fetchNews from '../../lib/fetchNews'
import NewsList from './NewsList'

export default async function Home() {
	const news: NewsResponse = await fetchNews(categories.join(','))
	return (
		<main>
			<NewsList news={news} />
		</main>
	)
}
