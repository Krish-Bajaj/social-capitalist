import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { companyZohoBooking } from '../data'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import logoDesktop from '../assets/withoutbackground.png'

const CustomNavbar = () => {
	return (
		<Navbar bg="light" data-bs-theme="light" fixed="top" expand="lg">
			<Container>
				<Navbar.Brand href="#">
					<Link to="/">
						<img src={logoDesktop} alt="social-capitalist" width="125" height="75" />
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse>
					<Nav className="navbar-links-mobile">
						<Nav.Link href="#action1">
							<Link to="/work">Our Work</Link>
						</Nav.Link>
						<Nav.Link href="#clients">Clients</Nav.Link>
						<Nav.Link href="#services-offered">Services Offered</Nav.Link>
						<Nav.Link>
							<Link to="/about-us">About Us</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
				<Navbar.Collapse>
					<Nav style={{ display: 'flex', alignItems: 'center' }}>
						<CTA />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default CustomNavbar

const CTA = () => {
	return (
		<a href={companyZohoBooking} target="blank">
			<CTAStyled>
				<p>Book A Call</p>
			</CTAStyled>
		</a>
	)
}

const CTAStyled = styled.button`
	display: flex;
	text-align: center;
	padding: 1rem 1.5rem;
	border-radius: 60px;
	background: var(--main-blue);
	color: white;
	font-weight: 600;
	@media (max-width: 768px) {
		margin-top: 0.5rem;
		display: block;
	}
`
