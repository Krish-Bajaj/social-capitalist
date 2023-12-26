import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { InstagramEmbed } from 'react-social-media-embed'

import { Testimonials, BlackBanner } from '../components'

import { servicesData } from '../data'

const Services = () => {
	const [data, setData] = useState({})
	const { id } = useParams()

	useEffect(() => {
		setData(servicesData[id])
	}, [id])

	return (
		<>
			<StyledImg src={data['banner']} alt="social-capitalist" />
			<Container>
				<Title>{data['tagline']}</Title>
				<SubTitle>Glimpse Of Some Of Our Work</SubTitle>
				<ReelsContainer>
					{data['work']?.map(el => (
						<InstagramEmbed url={el} />
					))}
				</ReelsContainer>
				<Testimonials data={data['testimonials']} />
				<BlackBanner />
			</Container>
		</>
	)
}

export default Services

const Container = styled.div`
	padding: 100px 80px;
	@media (max-width: 768px) {
		padding: 100px 24px;
		text-align: center;
	}
`
const ReelsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 3rem;
	@media (max-width: 768px) {
		margin-top: 2rem;
        overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
        display: block;
		div {
			display: inline-block;
            margin-left: 0.25rem;
		}
	}
`

const StyledImg = styled.img`
	margin-top: 100px;
	@media (max-width: 768px) {
		height: 250px;
	}
`
const Title = styled.p`
	text-shadow: 0px 14px 64px rgba(24, 39, 75, 0.12), 0px 8px 22px rgba(24, 39, 75, 0.12);
	font-size: 64px;
	font-weight: 700;
	text-transform: capitalize;
	color: white;
	text-align: center;
	margin: -615px auto 0px auto;
	max-width: 700px;
	@media (max-width: 768px) {
		font-size: 24px;
		margin-top: -250px;
	}
`
const SubTitle = styled.p`
	font-size: 42px;
	font-weight: 600;
	letter-spacing: -1px;
	text-transform: capitalize;
	margin-top: 280px;
    color: #eea767;
	@media (max-width: 768px) {
		font-size: 24px;
		margin-top: 125px;
	}
`
