import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const Contact = () => {
	return (
		<>
			<Header />
			<div className='min-h-screen flex flex-col items-center justify-center bg-blue-50'>
				<h1 className='text-4xl font-bold mb-4 text-orange-700'>Contact Us</h1>
				<p className='text-lg text-gray-700 mb-6'>
					We'd love to hear from you!
				</p>
				<form className='bg-white p-6 rounded-2xl shadow-md w-full max-w-md'>
					<label className='block mb-2 font-semibold text-gray-600'>
						Name:
					</label>
					<input
						type='text'
						className='w-full p-3 border border-gray-300 rounded-lg mb-4'
						placeholder='Your Name'
					/>
					<label className='block mb-2 font-semibold text-gray-600'>
						Email:
					</label>
					<input
						type='email'
						className='w-full p-3 border border-gray-300 rounded-lg mb-4'
						placeholder='Your Email'
					/>
					<label className='block mb-2 font-semibold text-gray-600'>
						Message:
					</label>
					<textarea
						className='w-full p-3 border border-gray-300 rounded-lg mb-4'
						rows='4'
						placeholder='Your Message'
					></textarea>
					<button
						type='submit'
						className='bg-orange-700 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300'
					>
						Send Message
					</button>
				</form>
			</div>
			<Footer />
		</>
	)
}

export default Contact
