import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { companyDetails, companyZohoBooking } from '../data'

import logo from '../assets/withoutbackground.png'

import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import pinterest from '../assets/pinterest.png'

const Footer = () => {
	const data = companyDetails()

	const socials = [
		{
			type: 'instagram',
			img: instagram,
			link: 'https://instagram.com/socialcapitalist101?igshid=NzZlODBkYWE4Ng==',
		},
		{
			type: 'linkedin',
			img: linkedin,
			// link: `mailto:${data['Email']}`,
		},
		{
			type: 'facebook',
			img: facebook,
			link: 'https://www.facebook.com/profile.php?id=100084710229931&mibextid=LQQJ4d',
		},
		// {
		// 	type: 'pinterest',
		// 	img: pinterest,
		// 	// link: 'https://www.facebook.com/profile.php?id=100084710229931&mibextid=LQQJ4d',
		// },
	]

	return (
		<Container>
			<div>
				<Link to="/">
					<StyledImage src={logo} alt="social-capitalist" />
				</Link>
				<ImageContainer>
					{socials.map(el => (
						<a href={el.link} target="blank">
							<img src={el.img} alt={el.type} />
						</a>
					))}
				</ImageContainer>
				<CTA />
			</div>
			<ContactDetails>
				<p style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Contact Us:</p>
				<p>
					<span>
						Email: <br />
						{data['Email']}
					</span>
				</p>
				<p style={{ marginTop: '0.5rem' }}>
					<span>
						Phone: <br />
						{data['Phone1']}
						<br />
						{data['Phone2']}
					</span>
				</p>
			</ContactDetails>
			<LinksContainer>
				<div>
					<p>Our Work</p>
					<a href="#commitments">
						<p>Our Commitment</p>
					</a>
					<p>Our Team</p>
				</div>
				<div>
					<Link to="/about-us">
						<p>About Us</p>
					</Link>
					<a href="#services-offered">
						<p>Services</p>
					</a>
				</div>
			</LinksContainer>
		</Container>
	)
}

export default Footer

const CTA = () => {
	return (
		<a href={companyZohoBooking} target="blank">
			<CTAStyled>
				<p>Contact Us</p>
			</CTAStyled>
		</a>
	)
}

const Container = styled.div`
	background: #fafafa;
	padding: 40px 64px;
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	margin-top: auto;
	@media (max-width: 768px) {
		padding: 1rem;
	}
`

const ImageContainer = styled.div`
	display: flex;
	img {
		cursor: pointer;
		width: 22px;
		height: 22px;
		margin: 1rem;
	}
	@media (max-width: 768px) {
		img {
			margin: 0.5rem 0.35rem;
		}
	}
`

const CTAStyled = styled.button`
	display: flex;
	text-align: center;
	padding: 0.75rem 2rem;
	border-radius: 60px;
	background: var(--main-blue);
	color: white;
	font-weight: 600;
	margin-bottom: 1rem;
	@media (max-width: 768px) {
		display: none;
	}
`

const LinksContainer = styled.div`
	display: flex;
	p {
		cursor: pointer;
		margin-bottom: 1.5rem !important;
	}
	div {
		margin-right: 3rem;
	}
	@media (max-width: 768px) {
		display: none;
	}
`

const StyledImage = styled.img`
	width: 125px;
	height: 75px;
	margin-left: 1rem;
	@media (max-width: 768px) {
		width: 90px;
		height: 55px;
		margin-left: 0.3rem;
	}
`

const ContactDetails = styled.div`
	max-width: 300px;
	@media (max-width: 768px) {
		max-width: 200px;
		p {
			font-size: 10px;
		}
	}
`
