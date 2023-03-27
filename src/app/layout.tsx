import './globals.css'
import Header from './Header'
import Providers from './Providers'

export const metadata = {
	title: 'The Newsroom Network',
	description:
		'We are the eyes and ears of the world. Connecting you to the world, one story at a time.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className='bg-gray-100 dark:bg-zinc-900 transition-all duration-700'>
				<Providers>
					<Header />
					<div className='max-w-6xl mx-auto'>{children}</div>
				</Providers>
			</body>
		</html>
	)
}
