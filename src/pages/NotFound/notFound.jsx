import React from 'react'

const NotFound = () => {
	return (
		<div className='min-h-screen flex items-center justify-center bg-black text-white'>
			<div className='text-center'>
				<h1 className='text-9xl font-extrabold text-red-500 mb-6'>404</h1>
				<p className='text-2xl font-semibold mb-4'>
					Oops! The page you’re looking for doesn’t exist.
				</p>
				<p className='mb-8 text-lg'>
					But hey, don't panic, maybe you typed something wrong.
				</p>
				<button
					onClick={() => (window.location.href = '/')}
					className='bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-500 transition duration-300'
				>
					Go Back Home
				</button>
				<div className='mt-10'>
					<img
						src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
						alt='Confused Travolta'
						className='w-80 mx-auto rounded-xl shadow-lg'
					/>
				</div>
			</div>
		</div>
	)
}

export default NotFound
