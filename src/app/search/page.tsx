import fetchNews from '../../../lib/fetchNews'
import NewsList from '../NewsList'

type Props = {
	searchParams?: { term: string }
}

const Search = async ({ searchParams }: Props) => {
	const news: NewsResponse = await fetchNews(
		'general',
		searchParams?.term,
		true
	)
	return (
		<main>
			<h1 className='headerTitle'>Search Resuts For: {searchParams?.term}</h1>
			<NewsList news={news} />
		</main>
	)
}

export default Search
