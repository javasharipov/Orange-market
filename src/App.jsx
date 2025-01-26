import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Footer from './Footer/Footer'
import { Route, Routes, Link } from 'react-router-dom'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import NotFound from './pages/NotFound/notFound'
function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Routes>
				<Route path='/' element={<Hero />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
