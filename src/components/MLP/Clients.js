import styled from 'styled-components'

import company1 from '../../assets/company1.png'
import company2 from '../../assets/company2.png'
import company3 from '../../assets/company3.png'
import company4 from '../../assets/company4.png'
import company5 from '../../assets/company5.png'
import company6 from '../../assets/company6.png'
import company7 from '../../assets/company7.png'
import company8 from '../../assets/company8.png'
import company9 from '../../assets/company9.png'
import company10 from '../../assets/company10.png'

const Clients = () => {
	const clients = [
		company1,
		company2,
		company3,
		company4,
		company5,
		company6,
		company7,
		company8,
		company9,
		company10,
	]

	clients.map(el => console.log(el))

	return (
		<Container>
			<Title>Clients we have worked with</Title>
			<SubContainer>
				{clients.map(client => (
					<img src={client} alt="client" />
				))}
			</SubContainer>
		</Container>
	)
}

export default Clients

const Container = styled.div`
	margin-top: 5rem;
	text-align: center;
`
const SubContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	flex-wrap: wrap;
    margin-top: 4rem;
    img {
        margin: 2.5rem;
    }
    @media (max-width: 768px) {
        margin-top: 0rem;
        img {
            margin: 1.5rem 0.5rem;
        }
	}
`

/* Text styles */
const Title = styled.p`
	font-size: 48px;
	font-weight: 500;
	letter-spacing: -1px;
	text-transform: capitalize;
	@media (max-width: 768px) {
		margin-top: 1rem;
		font-size: 24px;
	}
`
