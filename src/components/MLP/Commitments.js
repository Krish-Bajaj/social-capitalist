import styled from 'styled-components'

import { commitmentsData } from '../../data'

const Commitments = () => {
	return (
		<Container id="commitments">
			<Row>
				<div>
					<Value>100%</Value>
					<Metric>In-house & independent</Metric>
				</div>

				<SubRow>
					<Value>80+</Value>
					<Metric>Brands trust us</Metric>
				</SubRow>
			</Row>
			<Row>
				<div>
					<Value>2+ Years</Value>
					<Metric>Crafting Digital Experiences</Metric>
				</div>

				<SubRow>
					<Value>10+</Value>
					<Metric>Cities reached</Metric>
				</SubRow>
			</Row>
		</Container>
	)
}

export default Commitments

const Container = styled.div`
	margin-top: 4rem;
	display: table;
	margin-right: auto;
	margin-left: auto;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`

const Value = styled.p`
	font-size: 64px;
	font-style: italic;
	font-weight: 100;
	text-transform: capitalize;
	@media (max-width: 768px) {
		font-size: 27px;
	}
`
const Metric = styled.p`
	font-size: 22px;
	font-weight: 500;
	line-height: 24px;
	@media (max-width: 768px) {
		font-size: 12px;
		line-height: 165%;
		margin-bottom: 1rem;
	}
`

const Row = styled.p`
	display: flex;
	justify-content: space-between;
	@media (max-width: 768px) {
		justify-content: center;
	}
`

const SubRow = styled.p`
	margin-left: 5rem;
	@media (max-width: 768px) {
		margin-left: 2rem;
	}
`