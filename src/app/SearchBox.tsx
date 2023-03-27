'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useState } from 'react'

const SearchBox = () => {
	const [input, setInput] = useState<string>('')
	const router = useRouter()

	const handleSearch = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		if (!input) return
		router.push(`/search?term=${input}`)
	}

	return (
		<form
			onSubmit={handleSearch}
			className='max-w-6xl mx-auto flex justify-between items-center px-5'>
			<input
				value={input}
				onChange={(event) => setInput(event.target.value)}
				type='text'
				placeholder='Search Keywords...'
				className='flex-1 w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none bg-transparent dark:text-orange-400'
			/>
			<button
				type='submit'
				disabled={!input}
				className='text-orange-400 disabled:text-gray-400'>
				Search
			</button>
		</form>
	)
}

export default SearchBox
