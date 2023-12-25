import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { companyDetails, companyZohoBooking } from '../data'

import logo from '../assets/withoutbackground.png'
import instagram from '../assets/instagram.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'

const Footer = () => {
	const data = companyDetails()

	const socials = [
		{
			type: 'instagram',
			img: instagram,
			link: 'https://instagram.com/socialcapitalist101?igshid=NzZlODBkYWE4Ng==',
		},
		{
			type: 'email',
			img: email,
			link: `mailto:${data['Email']}`,
		},
		{
			type: 'phone',
			img: phone,
			link: `tel:${data['Phone']}`,
		},
	]

	const contactUs = [
		{
			type: 'Email',
			value: data['Email'],
			link: `mailto:${data['Email']}`,
		},
		{
			type: 'Address',
			value: data['Address'],
		},
		{
			type: 'Phone',
			value: data['Phone'],
			link: `tel:${data['Phone']}`,
		},
	]

	return (
		<Container>
			<div>
				<StyledImage src={logo} alt="social-capitalist" />
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
				{contactUs.map(el => (
					<p>
						<span>{el.type}:</span>
						<br />
						<a href={el.link}>{el.value}</a>
					</p>
				))}
			</ContactDetails>
			<LinksContainer>
				<div>
					<p>Work With Us</p>
					<p>Advertise With Us</p>
					<p>Business Advices</p>
				</div>
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
					<p>FAQs</p>
					<p>Report a Bug</p>
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
