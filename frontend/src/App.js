import logo from './logo.svg';
import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { BrowserRouter, Route,Link } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import { userSigninReducer } from './reducers/userReducers';
import { useSelector } from 'react-redux';

function App() {
	const userSignin= useSelector(state => state.userSignin);
	const {userInfo}=userSignin;
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
            <Link to="/">Aria</Link>
						{/* <a href="index.html">آریا</a> */}
					</div>
					<div class="header-links">
						<a href="cart.html">Cart</a>
						{
							userInfo ? <Link to="/profile">{userInfo.name}</Link>:
						<Link to="/signin">Sign In</Link>}
						<Link to="/signin">Sign In</Link>
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
						<Route path="/signin" component={SigninScreen} />
						<Route path="/register" component={RegisterScreen} />
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
