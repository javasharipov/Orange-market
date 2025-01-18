import React from 'react'

const Loading = ({count}) => {
	return (
		<div className='w-[1500px] px-8 mx-auto my-12 flex items-center justify-center flex-wrap gap-5  '>
		{
			Array(count).fill().map((_, inx) =>(
				<div className="w-[250px] h-[300px] shadow-sm hover:shadow-lg rounded-2xl cursor-pointer animate-pulse">
		<div className="w-full h-3/5 bg-orange-200 rounded-2xl"></div>
		<div className="flex flex-col items-start gap-2 px-2 mt-2">
			<div className="w-2/3 h-6 bg-orange-200 rounded-md"></div>
			<div className="w-12 h-7 bg-orange-300 rounded-md"></div>
			<div className="w-full h-8 bg-orange-300 rounded-md"></div>
		</div>
	</div>
			))
		}
		</div>
	)
}

export default Loading