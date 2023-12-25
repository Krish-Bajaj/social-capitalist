import styled from 'styled-components'

import coolArrow from '../../assets/coolArrow.png'

const AboutUs = () => {
	return (
		<Container>
			<StyledImg src={coolArrow} alt="social-capitalist" width={64} height={57} />
			<div>
				<Title>ABOUT US</Title>
				<StyledText>
					We are a team. A team of craft-obsessed people that believe collaboration and creativity
					are powerful tools to turn dreams into reality- We are transparent, flexible young minds
					who don't just keep up with the trends, rather create them and focus on what matters.
					<br />
					<br />
					We embrace growth - personal and professional growth. We strive to deliver captivating
					experiences that touch people's hearts. Make them laugh, roll, share with friends and
					motivate to act.
					<br />
					<br />
					When you work with us, you get a team of ingenious people that:
					<br />
					• Delivers unique strategies to elevate your sales <br />
					• Grows your community and support <br />
					• Saves you months of trials and errors <br />
					And most importantly, allows you to be the boss!
				</StyledText>
			</div>
		</Container>
	)
}

export default AboutUs

const Container = styled.div`
	display: flex;
	margin-top: 3.5rem;
	background: radial-gradient(
		50% 50% at 50% 50%,
		rgba(242, 231, 255, 0.5) 0%,
		rgba(255, 255, 255, 0) 100%
	);
	@media (max-width: 768px) {
		margin-top: 2rem;
	}
`

const StyledImg = styled.img`
	margin-right: 2rem;
	width: 52px;
	height: 45px;
	@media (max-width: 768px) {
		margin-right: 1rem;
		width: 35px;
		height: 30px;
        margin-top: 0.25rem;
	}
`

/* Text styles */
const Title = styled.p`
	color: #f3bc4c;
	font-size: 20px;
	font-weight: 600;
	letter-spacing: 5px;
	text-align: left;
    @media (max-width: 768px) {
		font-size: 18px;
	}
`
const StyledText = styled.p`
	font-size: 26px;
	font-weight: 500;
	line-height: 184.615%;
	text-align: left;
    @media (max-width: 768px) {
		font-size: 16px;
	}
`
