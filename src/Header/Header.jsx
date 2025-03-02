import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
	return (
		<header className='w-full bg-orange-600 h-20'>
			<nav className='w-[1500px] px-8 mx-auto flex justify-between items-center pt-4'>
				<div className='flex items-center justify-center gap-2'>
					<img
						className='w-14'
						src='https://seeklogo.com/images/O/orange-logo-DB080DF597-seeklogo.com.png'
						alt=''
					/>
					<h2 className='font-black text-4xl  text-[#F5F5DC] '>OrangeMarket</h2>
				</div>
				<ul className='text-[#F5F5DC] flex items-center text-lg gap-14'>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'/about'}>About</Link>
					</li>
					<li>
						<Link to={'/contact'}>Contact</Link>
					</li>
				</ul>
				<button className='py-3 px-8 bg-[#F5F5DC] rounded-lg text-orange-400 border border-orange-400'>
					Contact Us
				</button>
			</nav>
		</header>
	)
}

export default Header
