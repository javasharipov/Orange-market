import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading'
import { request } from '../api'
import ProductModal from './modal'

const Hero = () => {
	const limit = 5
	const [products, setProducts] = useState([])
	const [count, setCount] = useState(1)
	const [total, setTotal] = useState(0)
	const [categories, setCategories] = useState([])
	const [oneItem, setOneItem] = useState(null)
	const [selectedCategory, setSelectedCategory] = useState('')

	useEffect(() => {
		request
			.get('/products/category-list')
			.then(res => setCategories(res.data))
			.catch(err => console.error(err))
	}, [])

	useEffect(() => {
		const fetchProducts = () => {
			request
				.get('/products', {
					params: {
						limit,
						skip: (count - 1) * limit,
						category: selectedCategory || undefined,
					},
				})
				.then(res => {
					if (count === 1) {
						setProducts(res.data.products)
					} else {
						setProducts(prevProducts => [...prevProducts, ...res.data.products])
					}
					setTotal(res.data.total)
				})
				.catch(err => console.log(err))
		}

		fetchProducts()
	}, [count, selectedCategory])

	const handleCategoryClick = category => {
		setSelectedCategory(category)
		setCount(1)
		setProducts([])
	}

	return (
		<>
			{products.length === 0 ? (
				<Loading count={10} />
			) : (
				<div className='w-[1500px] px-8 mx-auto my-12'>
					{/* Categories */}
					<div className='flex mx-auto py-5 overflow-auto gap-2 mb-8'>
						{categories.map((category, index) => (
							<div
								className={`category whitespace-nowrap py-2 px-6 rounded-lg ${
									selectedCategory === category
										? 'bg-orange-700'
										: 'bg-orange-500'
								} text-white select-none cursor-pointer`}
								key={index}
								onClick={() => handleCategoryClick(category)} // Handle category click
							>
								{category}
							</div>
						))}
					</div>

					{/* Products */}
					<div className='flex items-center justify-center gap-5 flex-wrap'>
						{products.map(product => (
							<div
								key={product.id}
								className='w-[250px] h-[360px] shadow-sm hover:shadow-lg rounded-2xl cursor-pointer'
							>
								<div className='w-full h-3/5 bg-orange-500 rounded-2xl px-2'>
									<img
										className='w-full h-full'
										src={product.thumbnail}
										alt={product.title}
										onClick={() => setOneItem(product)}
									/>
								</div>
								<div className='flex flex-col items-start gap-2 px-2'>
									<span className='text-xl text-orange-500 font-bold'>
										{product.title}
									</span>
									<div className='w-16 h-7 bg-orange-500 text-white flex items-center justify-center rounded-md'>
										<strong>${product.price}</strong>
									</div>
									<button className='bg-orange-500 px-8 py-1 rounded-md text-white border hover:text-orange-500 hover:bg-white hover:border border-orange-500'>
										Buy now
									</button>
								</div>
							</div>
						))}
					</div>

					{oneItem && (
						<ProductModal oneItem={oneItem} setOneItem={setOneItem} />
					)}

					{total > limit * count && (
						<button
							onClick={() => setCount(count + 1)}
							className='block mx-auto mt-9 px-8 py-3 bg-orange-500 text-lg text-white rounded-md'
						>
							See more
						</button>
					)}
				</div>
			)}
		</>
	)
}

export default Hero
