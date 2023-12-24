import styled from 'styled-components'

import hero from '../../assets/hero.png'

const Hero = () => {
	return (
		<Container>
			<div>
				<StyledText>We Take Care of Your Brand</StyledText>
				<StyledSubText>We care about our work and we care about our clients.</StyledSubText>
			</div>
			<StyledImage src={hero} alt="social-capitalist" />
		</Container>
	)
}

export default Hero

const Container = styled.div`
	background: radial-gradient(50% 50% at 50% 50%, #ffe7d9 0%, rgba(250, 237, 255, 0) 100%);
	display: flex;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const StyledText = styled.p`
	font-size: 96px;
	font-style: italic;
	font-weight: 100;
	line-height: 102.604%;
	letter-spacing: -4px;
	text-transform: capitalize;
    margin-right: 3rem;
	@media (max-width: 768px) {
		font-size: 64px;
        margin-right: 1rem;
	}
`

const StyledSubText = styled.p`
	font-size: 20px;
	font-style: normal;
	font-weight: 500;
	margin-top: 2rem;
    @media (max-width: 768px) {
		margin-top: 0.5rem;
	}
`

const StyledImage = styled.img`
	width: 558px;
	height: 665px;
	@media (max-width: 768px) {
		width: 260px;
		height: 300px;
	}
`
