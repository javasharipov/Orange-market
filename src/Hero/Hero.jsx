import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import axios from 'axios';

const Hero = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => setProducts(res.data.products)) 
      .catch((err) => console.log(err));
  }, []);


  return (
		<>
			{products === null ? (
				<Loading count={15} />
			) : (
				<div className="w-[1500px] px-8 mx-auto my-12">
					<div className="flex items-center justify-center gap-5 flex-wrap">
						{products.map((product) => (
							<div
								key={product.id}
								className="w-[250px] h-[360px] shadow-sm hover:shadow-lg rounded-2xl cursor-pointer hover:ease-in duration-150"
							>
								<div className="w-full h-3/5 bg-orange-500 rounded-2xl px-2">
									<img
										className="w-full h-full"
										src={product.thumbnail}
										alt={product.title }
									/>
								</div>
								<div className="flex flex-col items-start gap-2 px-2">
									<span className="text-xl text-orange-500 font-bold">
										{product.title }
									</span>
									<div className="w-16 h-7 bg-orange-500 text-white flex items-center justify-center rounded-md">
										<strong>${product.price}</strong>
									</div>
									<button className="bg-orange-500 px-8 py-1 rounded-md text-white border hover:text-orange-500 hover:bg-white hover:border border-orange-500 hover:ease-in duration-300">
										Buy now
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);	
};

export default Hero;
