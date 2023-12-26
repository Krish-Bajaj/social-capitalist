import styled from 'styled-components'
import { Link } from 'react-router-dom'

import electronics from '../assets/electronics.png'
import restaurants from '../assets/restaurants.png'
import fashion from '../assets/fashion.png'

const ServicesOffered = () => {
	const services = [
		{
			image: electronics,
			service: 'Electronics',
			link: '/services/electronics',
		},
		{
			image: restaurants,
			service: 'Restaurants',
			link: '/services/restaurants',
		},
		{
			image: fashion,
			service: 'Fashion',
			link: '/services/fashion',
		},
	]

	return (
		<Container id="services-offered">
			<Title>Services Offered</Title>
			<SubTitle>Elevating Experiences, Empowering Solutions</SubTitle>
			<SubContainer>
				{services.map(el => (
					<Link to={el.link}>
						<Img src={el.image} alt={el.service} />
						<ImgText>{el.service}</ImgText>
					</Link>
				))}
			</SubContainer>
		</Container>
	)
}

export default ServicesOffered

const Container = styled.div`
	margin-top: 6em;
	background: radial-gradient(
		50% 50% at 50% 50%,
		rgba(220, 0, 255, 0.13) 0%,
		rgba(241, 152, 255, 0) 100%
	);
	text-align: center;
`
const SubContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`

const Title = styled.p`
	font-size: 64px;
	font-weight: 500;
	text-transform: capitalize;
    @media (max-width: 768px) {
        font-size: 40px;
	}
`
const SubTitle = styled.p`
	font-size: 18px;
	font-weight: 500;
	line-height: 32px;
	margin-top: 0.5em;
    @media (max-width: 768px) {
        font-size: 12px;
        line-height: normal;
	}
`
const Img = styled.img`
    margin-top: 4rem;
    @media (max-width: 768px) {
        margin-top: 2rem;
        width: 70%;
        height: 70%;
	}
`
const ImgText = styled.p`
	font-size: 24px;
	font-weight: 500;
	text-transform: capitalize;
    margin-top: 1rem;
    @media (max-width: 768px) {
        font-size: 16px;
	}
`
