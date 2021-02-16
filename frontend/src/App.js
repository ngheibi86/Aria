import logo from './logo.svg';
import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { BrowserRouter, Route,Link } from 'react-router-dom';
import CartScreen from './screens/CartScreen';

function App() {
	const openMenu = () => {
		document.querySelector('.sidebar').classList.add('open');
	};
	const closeMenu = () => {
		document.querySelector('.sidebar').classList.remove('open');
	};
	return (
		<BrowserRouter>
			<div class="grid-container">
				<header class="header">
					<div class="brand">
						<button onClick="openMenu">&#9776;</button>
            <Link to="/">آریا</Link>
						{/* <a href="index.html">آریا</a> */}
					</div>
					<div class="header-links">
						<a href="cart.html">سبد خرید</a>
						<a href="signin.html">ورود</a>
					</div>
				</header>
				<aside class="sidebar">
					<h3>محصولات</h3>
					<button class="sidebar-close-button"  onClick='closeMenu'>
						x
					</button>
					<ul>
						<li>
							<a href="index.html">شلوار</a>
						</li>

						<li>
							<a href="index.html">پیراهن</a>
						</li>
					</ul>
				</aside>
				<main class="main">
					<div class="content">
						<Route path="/product/:id" component={ProductScreen} />
						<Route path="/" exact={true} component={HomeScreen} />
						<Route path="/cart/:id?" component={CartScreen}></Route>
					</div>
				</main>
				<footer class="footer">All right reserved.</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
