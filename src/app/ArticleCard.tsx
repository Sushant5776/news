import LiveTimeStamp from './LiveTimeStamp'
import ReadMoreButton from './ReadMoreButton'

type Props = {
	article: Article
}

const ArticleCard = ({ article }: Props) => {
	return (
		<section className='bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-700 ease-out'>
			{article.image && (
				<img
					src={article.image}
					alt={article.title}
					className='h-56 w-full object-cover rounded-t-lg shadow-md'
				/>
			)}

			<section className='flex flex-1 flex-col'>
				<section className='flex flex-1 flex-col p-5'>
					<h2 className='font-bold font-serif'>{article.title}</h2>

					<section className='mt-2 flex-1'>
						<p className='text-xs line-clamp-2'>{article.description}</p>
					</section>

					<footer className='text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400'>
						<p>{article.source} -</p>
						<p>
							<LiveTimeStamp time={article.published_at} />
						</p>
					</footer>
				</section>

				<ReadMoreButton article={article} />
			</section>
		</section>
	)
}

export default ArticleCard
