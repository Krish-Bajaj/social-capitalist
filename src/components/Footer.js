import styled from 'styled-components'

import logo from '../assets/withoutbackground.png'
import instagram from '../assets/instagram.svg'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'

const Footer = () => {
	return (
		<Container>
			<div>
				<img
					src={logo}
					alt="social-capitalist"
					width="125"
					height="75"
					style={{ marginLeft: '1rem' }}
				/>
				<ImageContainer>
					<img src={instagram} alt="instagram" />
					<img src={email} alt="email" />
					<img src={phone} alt="phone" />
				</ImageContainer>
				<CTA />
			</div>
			<LinksContainer>
				<div>
					<p>Work With Us</p>
					<p>Advertise With Us</p>
					<p>Business Advices</p>
				</div>
				<div>
					<p>Our Work</p>
					<p>Our Commitment</p>
					<p>Our Team</p>
				</div>
				<div>
					<p>About Us</p>
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
		<CTAStyled>
			<p>Contact Us</p>
		</CTAStyled>
	)
}

const Container = styled.div`
	background: #fafafa;
	padding: 40px 64px;
	display: flex;
	justify-content: space-between;
    align-items: center;
    margin-top: auto;
	@media (max-width: 768px) {
		padding: 0px 24px;
	}
`

const ImageContainer = styled.div`
	display: flex;
	img {
		cursor: pointer;
		width: 22px;
		height: 22px;
		margin: 1rem 1rem;
	}
`

const CTAStyled = styled.button`
	display: flex;
	text-align: center;
	padding: 0.75rem 2rem;
	border-radius: 60px;
	background: #3461ff;
	color: white;
	font-weight: 600;
	margin-bottom: 1rem;
	/* @media (max-width: 768px) {
		margin-top: 0.5rem;
		display: block;
	} */
`

const LinksContainer = styled.div`
    display: flex;
    p {
        cursor: pointer;
        margin-bottom: 1.5rem !important;
    }
    div {
        margin-right: 5rem;
    }
`
