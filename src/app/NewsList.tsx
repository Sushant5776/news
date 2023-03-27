import ArticleCard from './ArticleCard'

type Props = {
	news: NewsResponse
}

const NewsList = ({ news }: Props) => {
	return (
		<article className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10'>
			{news.data.map((article) => (
				<ArticleCard key={article.title} article={article} />
			))}
		</article>
	)
}

export default NewsList
