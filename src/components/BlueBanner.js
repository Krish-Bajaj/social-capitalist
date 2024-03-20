import styled from 'styled-components'

import { CoolText } from './CoolText'

import { companyZohoBooking } from '../data'

const BlueBanner = () => {
	return (
		<Container className="styled-div-bb1">
			<StyledText>
				Let’s make something <CoolText text={['fun', 'impactful', 'original']} />
			</StyledText>
			<CTA />
		</Container>
	)
}

export default BlueBanner

const CTA = () => {
	return (
		<a href={companyZohoBooking} target="blank">
			<CTAStyled>
				<p>Get In Touch!</p>
			</CTAStyled>
		</a>
	)
}

const CTAStyled = styled.button`
	display: flex;
	text-align: center;
	padding: 1rem 2rem;
	border-radius: 60px;
	background: white;
	color: black;
	font-weight: 600;
	margin-top: 2rem;
	font-size: 24px;
	@media (max-width: 768px) {
		padding: 1rem 2rem;
		font-size: 20px;
		margin: 1rem auto;
	}
`

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-top: 4rem;
	padding: 3.5rem;
	color: white;
	font-weight: 500;
	border-radius: 32px;
	@media (max-width: 768px) {
		flex-direction: column;
		text-align: center;
		padding: 2.5rem;
	}
`

const StyledText = styled.p`
	font-size: 56px;
	font-weight: 500;
	line-height: 112.5%;
	text-transform: capitalize;
    max-width: 650px;
    @media (max-width: 768px) {
		font-size: 36px;
	}
`
