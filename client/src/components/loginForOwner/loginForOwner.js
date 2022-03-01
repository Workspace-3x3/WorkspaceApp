import React from 'react';
import logo from '../login/img2.jpeg';
import { AccountCircle, Lock } from '@material-ui/icons';
import { Grid, TextField, Link } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import Navbar from '../../navbar/navbar';

class loginforOwner extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.responseGoogle = this.responseGoogle.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
		});
	}
	// save the information in db
	handleSubmit(event) {
		const { email, password } = this.state;

		axios
			.post(`http://localhost:5000/loginowner`, {
				email,
				password,
			})
			.then(response => {
				console.log(response.data);
				if (response.data.success === 'login sucessfull') {
					localStorage.setItem('usertoken', response.data.token);
					console.log('DONE');
					this.props.history.push('/ownerPage');
				} else {
					console.log(response.data);
					alert('make sure your information is correct');
				}
			})
			.catch(error => {
				console.log('login error', error);
				alert('login error');
			});
		event.preventDefault();
	}
	responseGoogle = res => {
		this.setState({ login: true });
		localStorage.setItem('login', this.state.login);
		localStorage.setItem('name', res.profileObj.email);
		localStorage.setItem('givenName', res.profileObj.givenName);
		localStorage.setItem('givenEmail', res.profileObj.Email);
		setTimeout(function () {
			window.location.href = '/ownerPage';
		}, 2300);
	};
	render() {
		return (
			<div>
				<div>
					<nav
						class='navbar navbar-expand-lg navbar-light fixed-top py-3'
						style={{ backgroundColor: '#00848C' }}
						id='mainNav'
					>
						<div class='container'>
							<a class='navbar-brand js-scroll-trigger' href='/landingPage'>
								Desk Tops
							</a>
							<button
								class='navbar-toggler navbar-toggler-right'
								type='button'
								data-toggle='collapse'
								data-target='#navbarResponsive'
								aria-controls='navbarResponsive'
								aria-expanded='false'
								aria-label='Toggle navigation'
							>
								<span class='navbar-toggler-icon'></span>
							</button>
							<div class='collapse navbar-collapse' id='navbarResponsive'>
								<ul class='navbar-nav ml-auto my-2 my-lg-0'>
									<li class='nav-item'>
										<a class='nav-link js-scroll-trigger' href='/loginForOwner'>
											LogIn As Owner
										</a>
									</li>
									<li class='nav-item'>
										<a class='nav-link js-scroll-trigger' href='/login'>
											LogIn As Customer
										</a>
									</li>
									<li class='nav-item'>
										<a class='nav-link js-scroll-trigger' href='/contactPage'>
											Let's Talk
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
				<br />
				<br />
				<Grid container className='test' style={{ minHeight: '100vh' }}>
					<Grid item xs={12} sm={6}>
						<img
							src={logo}
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							}}
							alt='brand'
						/>
					</Grid>
					<Grid
						container
						item
						xs={12}
						sm={6}
						alignItems='center'
						direction='column'
						justify='space-between'
						style={{ padding: 10 }}
					>
						<div />
						<div
							style={{
								display: 'flex',
								flexDirection: 'column',
								maxWidth: 400,
								minWidth: 300,
								marginBottom: '200px',
							}}
						>
							<Grid container>
								<h1>LOGIN OWNER</h1>
							</Grid>
							<TextField
								name='email'
								value={this.state.email}
								onChange={this.handleChange}
								label='Username'
								margin='normal'
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<AccountCircle />
										</InputAdornment>
									),
								}}
							/>

							<TextField
								name='password'
								value={this.state.password}
								onChange={this.handleChange}
								type='password'
								label='password'
								margin='normal'
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<Lock />
										</InputAdornment>
									),
								}}
							/>
							<div style={{ height: 20 }} />
							<Button
								variant='contained'
								style={{ backgroundColor: '#00848C' }}
								color='primary'
								onClick={this.handleSubmit}
							>
								LOGIN
							</Button>
							<div style={{ height: 20 }} />

							<Link href='/signupOwner' onClick={console.log('kk')}>
								<Button
									variant='contained'
									style={{ backgroundColor: '#00848C', width: '300px' }}
									color='primary'
									className='btn'
								>
									register
								</Button>
							</Link>
							<GoogleLogin
								Link
								to='/'
								clientId='394381312259-mdsk8p9som3135bt8ghjgebi9u5kmoi1.apps.googleusercontent.com'
								buttonText='login'
								onSuccess={this.responseGoogle}
								onFailure={this.responseGoogle}
								// cookiePolicy={'single_host_origin'}
							/>
							<br />
						</div>
						<div />
					</Grid>
				</Grid>
			</div>
		);
	}
}
export default loginforOwner;
