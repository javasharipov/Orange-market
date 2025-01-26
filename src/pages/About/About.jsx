import React from 'react'
import Hero from '../../Hero/Hero'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const About = () => {
	return (
		<>
			<Header />
			<div className='min-h-screen flex flex-col items-center justify-center bg-gray-50'>
				<h1 className='text-4xl font-bold mb-4 text-gray-800'>About Us</h1>
				<p className='text-lg text-gray-600 max-w-3xl text-center'>
					We are passionate developers creating modern web applications. Our
					goal is to empower developers with tools and resources to succeed in
					the tech world. Thank you for visiting!
				</p>
			</div>
			<Footer />
		</>
	)
}

export default About
