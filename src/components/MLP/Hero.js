import styled from 'styled-components'

import hero from '../../assets/hero.png'

const Hero = () => {
	return (
		<Container>
			<StyledImage
				src={hero}
				alt="social-capitalist"
				className="cssanimation sequence fadeInBottom"
			/>
			<div>
				<StyledText>
					We are here to make the digital world more beautiful, thoughtful and impactful.
				</StyledText>
			</div>
		</Container>
	)
}

export default Hero

const Container = styled.div`
	background: radial-gradient(50% 50% at 50% 50%, #ffe7d9 0%, rgba(250, 237, 255, 0) 100%);
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 4rem;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const StyledText = styled.p`
	font-size: 40px;
	font-weight: 200;
	/* text-transform: capitalize; */
	text-align: center;
	margin-top: 2rem;
	/* line-height: 102.604%; */
	/* letter-spacing: -4px; */
	margin-right: 1rem;
	/* font-style: italic; */
	
	@media (max-width: 768px) {
		font-size: 28px;
		/* margin-right: 1rem; */
	}
`

// const StyledSubText = styled.p`
// 	font-size: 20px;
// 	font-style: normal;
// 	font-weight: 500;
// 	margin-top: 2rem;
// 	@media (max-width: 768px) {
// 		margin: 1.25rem 0;
// 	}
// `

const StyledImage = styled.img`
	width: 558px;
	height: 665px;
	@media (max-width: 768px) {
		width: 260px;
		height: 300px;
	}
`
