import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import axios from 'axios';
import './nav.css';
class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			location: '',
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		this.setState({ location: event.target.value });
	}

	handleSubmit(event) {
		console.log(this.state);
		const { location } = this.state;

		axios
			.post(`http://localhost:5000/registerowner`, { location })
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log('error', error);
				alert('Error');
			});
		event.preventDefault();
	}

	render() {
		console.log(this.state);
		return (
			<ReactBootstrap.Navbar
				bg='light'
				expand='lg'
				className='navLO'
				fixed='top'
			>
				<ReactBootstrap.Navbar.Brand href='/landingPage'>
					BookingFinder
				</ReactBootstrap.Navbar.Brand>
				<ReactBootstrap.Navbar.Toggle aria-controls='basic-navbar-nav' />
				<ReactBootstrap.Navbar.Collapse id='basic-navbar-nav'>
					<ReactBootstrap.Nav className='ml-auto'>
						<ReactBootstrap.Nav.Link href='/landingPage'>
							Home
						</ReactBootstrap.Nav.Link>
						{/* <ReactBootstrap.Nav.Link href='/login'>
							log-in As Custumer
						</ReactBootstrap.Nav.Link>
						<ReactBootstrap.Nav.Link href='/loginForOwner'>
							log in as owner
						</ReactBootstrap.Nav.Link> */}
						<ReactBootstrap.NavDropdown title='log-in' id='basic-nav-dropdown'>
							<ReactBootstrap.NavDropdown.Item href='/login'>
								As Custumer
							</ReactBootstrap.NavDropdown.Item>
							<ReactBootstrap.NavDropdown.Item href='/loginForOwner'>
								As Owner
							</ReactBootstrap.NavDropdown.Item>
						</ReactBootstrap.NavDropdown>
					</ReactBootstrap.Nav>
					<ReactBootstrap.Form inline></ReactBootstrap.Form>
				</ReactBootstrap.Navbar.Collapse>
			</ReactBootstrap.Navbar>
		);
	}
}
export default NavBar;