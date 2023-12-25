import styled from 'styled-components'

import { companyZohoBooking } from '../data'

const BlueBanner = () => {
	return (
		<Container className="styled-div-bb1">
			<Title>Elevate Your Brand Today!</Title>
			<SubContainer>
				<SubTitle>
					Ready to transform your digital presence? Let's create magic together! book our services
					now!
				</SubTitle>
				<CTA />
			</SubContainer>
		</Container>
	)
}

export default BlueBanner

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
	justify-content: space-between;
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
const SubContainer = styled.div`
	/* margin-left: 3rem; */
`

/* Text styles */
const Title = styled.p`
	font-size: 64px;
	line-height: 135.938%;
	letter-spacing: -1px;
	text-transform: capitalize;
    @media (max-width: 768px) {
		font-size: 40px;
	}
`
const SubTitle = styled.p`
	font-size: 20px;
	line-height: 200%;
    @media (max-width: 768px) {
		font-size: 12px;
        margin-top: 1rem;
	}
`
