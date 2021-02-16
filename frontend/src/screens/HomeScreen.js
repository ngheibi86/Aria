import React, { useEffect } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {listProducts} from '../actions/productActions';


function HomeScreen(props) {

	const productList = useSelector(state=>state.productList);
	const 	{products,loading,error}=productList;
	const dispatch=useDispatch();

	useEffect(() => {
		dispatch(listProducts());
		return () => {
			//
		};
	}, []);

	return loading?<div>loading...</div>:
	error? <div>{error}</div>:
		<ul class="products">
			{products.map((product) => (
				<li key={product._id}>
					<div class="product">
						<Link to={'/product/' + product._id}>
							<img class="product-image" src={product.image} alt="product" />
						</Link>
						<div class="product-name">
							<Link to={'/product/' + product._id}>{product.name}</Link>
						</div>
						<div class="product-brand">{product.brand}</div>
						<div class="product-price">${product.price}</div>
						<div class="product-rating">
							{product.rating} Stars {product.review}
						</div>
					</div>
				</li>
			))}
		</ul>

}

export default HomeScreen;
