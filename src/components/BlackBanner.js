import styled from 'styled-components'

import { companyZohoBooking } from '../data'

import blackBanner from '../assets/blackBanner.png'

const BlackBanner = () => {
	return (
		<Container className="styled-div-bb2">
			<div>
				<Title>Start Your Journey With Us Now</Title>
				<CTA />
			</div>
			<StyledImg src={blackBanner} alt="social-capitalist" />
		</Container>
	)
}

export default BlackBanner

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
	padding: 1.5rem 3rem;
	border-radius: 60px;
	background: var(--main-blue);
	color: white;
	font-weight: 600;
    font-size: 24px;
    margin-top: 3rem;
	@media (max-width: 768px) {
		font-size: 16px;
        padding: 1rem 1.5rem;
        margin: 1rem auto;
	}
`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 5rem;
	color: white;
	padding: 3rem 5rem;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const StyledImg = styled.img`
    @media (max-width: 768px) {
		/* width: 85%;
        height: 85%; */
		display: none;
	}
`

/* Text styles */
const Title = styled.p`
	font-size: 56px;
	font-weight: 500;
	line-height: 112.5%;
	text-transform: capitalize;
    max-width: 550px;
    @media (max-width: 768px) {
		font-size: 36px;
	}
`
