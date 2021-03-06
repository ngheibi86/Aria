import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props) {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ repassword, setRePassword ] = useState('');
	const userRegister = useSelector((state) => state.userRegister);
	const { loading, userInfo, error } = userRegister;
	const dispatch = useDispatch();

	useEffect(
		() => {
			if (userInfo) {
				props.history.push('/');
			}
			return () => {};
		},
		[ userInfo ]
	);

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(register(name,email, password));
	};

	return (
		<div className="form">
			<form onSubmit={submitHandler}>
				<ul className="form-container">
					<li>
						<h2>Register</h2>
					</li>
					<li>
						{loading && <div>Loading...</div>}
						{error && <div>{error}</div>}
					</li>

					<li>
						<label htmlFor="name">Name</label>
						<input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} />
					</li>
                    <li>
						<label htmlFor="email">Email</label>
						<input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
					</li>
					<li>
						<lable htmlFor="password">Password</lable>
						<input
							type="password"
							id="password"
							name="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</li>
                    <li>
						<lable htmlFor="repassword">Re-Enter Password</lable>
						<input
							type="repassword"
							id="repassword"
							name="repassword"
							onChange={(e) => setRePassword(e.target.value)}
						/>
					</li>
					<li>
						<button type="submit" className="button primary">
							{' '}
							Register
						</button>
					</li>
					<li> Already have an account ?
                        <Link to="/signin">Sign-in</Link>
                    </li>
				</ul>
			</form>
		</div>
	);
}
export default RegisterScreen ;
