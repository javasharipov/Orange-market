import React from 'react'
import { MdReviews } from 'react-icons/md'

const ProductModal = ({ oneItem, setOneItem }) => {
	console.log('Modal Rendered:', oneItem)

	return (
		<>
			<div
				onClick={() => {
					console.log('Overlay clicked')
					setOneItem(null)
				}}
				className='fixed top-0 left-0 w-full h-screen bg-[#0005] cursor-pointer'
			></div>
			<div className='fixed flex  gap-5 p-4 top-[50%] left-[50%] bg-orange-100 w-[600px] min-h-[300px] translate-x-[-50%] translate-y-[-50%] rounded-md'>
				<div className='w-[50%] bg-orange-500 rounded-md'>
					<img src={oneItem.thumbnail} alt='Product' />
				</div>
				<div className='flex flex-col items-start'>
					<span className='text-3xl font-bold'>{oneItem.title}</span>
					<p className='max-w-[300px] font-medium'>{oneItem.description}</p>
					<div className='flex items-center gap-1 flex-1'>
						<MdReviews />
						<strong>{oneItem.rating}</strong>
					</div>
					<button
						className='bg-orange-500 py-1 px-8 text-white rounded'
						onClick={() => setOneItem(null)}
					>
						Close
					</button>
				</div>
			</div>
		</>
	)
}

export default ProductModal
