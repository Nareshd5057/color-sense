import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'
import { Button, Form, Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap'

export default class Header extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar bg="light" variant="light">
					<NavbarBrand className="logoText" href="#home">
						#<span>C</span>
						<span>o</span>
						<span>l</span>
						<span>o</span>
						<span>r</span>
						<span>S</span>
						<span>e</span>
						<span>n</span>
						<span>s</span>
						<span>e</span>
					</NavbarBrand>
				</Navbar>
				<div className="searchHeader"></div>
			</React.Fragment>
		)
	}
}
