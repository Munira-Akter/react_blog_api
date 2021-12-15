import React, { Fragment , useEffect , useState } from 'react';
import Product_two from '../../assets/img/products/product-img-2.jpg';
import Product_three from '../../assets/img/products/product-img-3.jpg';
import Product from './Product';

const Shop = () => {

	const [product, setproduct] = useState([]);

	useEffect(() => {
		let products = [
			{
			  name: 'Product1',
			  price: 200,
			  sell_price: 180,
			},{
			  name: 'Product1',
			  price: 200,
			  sell_price: 180,
			},{
			  name: 'Product2',
			  price: 300,
			  sell_price: 180,
			},{
			  name: 'Product1',
			  price: 400,
			  sell_price: 180,
			},{
			  name: 'Product1',
			  price: 500,
			  sell_price: '',
			},{
			  name: 'Product1',
			  price: 600,
			  sell_price: 580,
			},{
			  name: 'Product1',
			  price: 700,
			  sell_price: 680,
			},
		  ]

		  setproduct(products);
		
	},[])

	
    return (
		<Fragment>
			<div class="product-section mt-150 mb-150">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="section-title">	
						<h3><span class="orange-text">Our</span> Products</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.</p>
					</div>
				</div>
			</div>

			<div class="row">
			

			{
				product.map((product) => 
					<Product product={product}/>
				)
			}

			
				
</div>
		</div>
	</div>

		</Fragment>
    )
}

export default Shop
