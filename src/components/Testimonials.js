import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

/*
    image: of the client
    name:
    designation:
    testimonial:
*/
const Testimonials = ({ data }) => {
	return (
		<Container>
			<Title>What Our Clients Said about us</Title>
			<Marquee pauseOnHover speed={43}>
				{data?.map(el => (
					<Card
						image={el.image}
						name={el.name}
						designation={el.designation}
						testimonial={el.testimonial}
					/>
				))}
			</Marquee>
		</Container>
	)
}

export default Testimonials

const Card = ({ image, name, designation, testimonial }) => {
	return (
		<CardContainer>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<CardImg src={image} alt="name" />
				<div style={{ marginLeft: '2rem' }}>
					<Name>{name}</Name>
					<Designation>{designation}</Designation>
				</div>
			</div>
			<CardText>
				{testimonial}
			</CardText>
		</CardContainer>
	)
}

const Container = styled.div`
	margin-top: 5rem;
`
const CardContainer = styled.div`
	padding: 40px 73px 40px 40px;
	border-radius: 30px;
	background: #f8f9ff;
	max-width: 500px;
	margin-left: 5rem;
	margin-top: 3rem;
    @media (max-width: 768px) {
        width: 320px;
        padding: 1.75rem;
        margin-left: 3rem;
	}
`
const CardImg = styled.img`
     @media (max-width: 768px) {
        width: 60px;
        height: 60px;
	}
`
const CardText = styled.p`
	margin-top: 1.5rem;
    text-align: left;
    @media (max-width: 768px) {
        font-size: 12px;
	}
`

/* Text styles */
const Title = styled.p`
	text-align: center;
	font-size: 56px;
	font-weight: 500;
	letter-spacing: -1px;
	text-transform: capitalize;
    @media (max-width: 768px) {
        font-size: 36px;
	}
`
const Name = styled.p`
	font-size: 28px;
	font-style: italic;
	font-weight: 100;
	text-transform: capitalize;
    @media (max-width: 768px) {
        font-size: 18px;
	}
`
const Designation = styled.p`
	font-size: 20px;
	font-weight: 500;
	text-transform: capitalize;
    text-align: left;
    @media (max-width: 768px) {
        font-size: 12px;
	}
`
