import React, { Fragment } from 'react'
import Product_one from '../../assets/img/products/product-img-1.jpg';


const Product = (data) => {
    return (
        <Fragment>
            
					<div class="col-lg-4 col-md-6 text-center">
						<div class="single-product-item">
							<div class="product-image">
								<a href="single-product.html"><img src={ Product_one } alt="" /></a>
							</div>
							<h3>{data.product.name}</h3>
							<p class="product-price"><span>{data.product.price}</span> <del>{data.product.sell_price}</del> </p>
							<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
						</div>
					</div>
        </Fragment>
    )
}

export default Product
