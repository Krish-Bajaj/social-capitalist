import styled from 'styled-components'

import { commitmentsData } from '../../data'


const Commitments = () => {
	return (
		<Container>
			<SubContainer1>
				{commitmentsData.map(el => (
					<SubContainer2>
						<Value>{el.value}</Value>
						<Metric>{el.metric}</Metric>
					</SubContainer2>
				))}
			</SubContainer1>
			<SubContainer3>
				<Title>Elevations</Title>
				<SubTitle>
					We are committed to working with you collaboratively to understand your goals and create a
					strategy that will achieve them.
				</SubTitle>
			</SubContainer3>
		</Container>
	)
}

export default Commitments

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 4rem;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`
const SubContainer1 = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 45%;
    justify-content: space-between;
    flex-direction: row;
    @media (max-width: 768px) {
		width: 80%;
	}
`
const SubContainer2 = styled.div`
    width: 240px;
    @media (max-width: 768px) {
		width: 100px
	}
`
const SubContainer3 = styled.div`
    width: 600px;
    @media (max-width: 768px) {
		width: 100%;
	}
`

const Value = styled.p`
	font-size: 64px;
	font-style: italic;
	font-weight: 100;
	text-transform: capitalize;
    @media (max-width: 768px) {
        font-size: 40px;
	}
`
const Metric = styled.p`
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
    @media (max-width: 768px) {
        font-size: 12px;
        line-height: 165%;
        margin-bottom: 1rem;
	}
`
const Title = styled.p`
	font-size: 64px;
	font-weight: 500;
	letter-spacing: -1px;
	text-transform: capitalize;
    @media (max-width: 768px) {
        margin-top: 1rem;
        font-size: 40px;
	}
`
const SubTitle = styled.p`
	font-size: 18px;
	font-weight: 500;
	line-height: 32px;
    @media (max-width: 768px) {
        font-size: 12px;
        line-height: 185%;
	}
`
