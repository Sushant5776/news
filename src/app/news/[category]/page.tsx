import { categories } from '../../../../constants'
import fetchNews from '../../../../lib/fetchNews'
import NewsList from '../../NewsList'

type Props = {
	params: { category: Category }
}

const Category = async ({ params: { category } }: Props) => {
	const news = await fetchNews(category)
	return (
		<main>
			<h1 className='headerTitle'>{category}</h1>
			<NewsList news={news} />
		</main>
	)
}

export default Category

export async function generateStaticParams() {
	return categories.map((category) => ({ category }))
}
