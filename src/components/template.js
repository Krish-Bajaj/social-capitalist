import styled from 'styled-components'

import image from '../assets/hero.png'

const Hero = () => {
    return (
        <Container>

        </Container>
    )
}

export default Hero

const Container = styled.div`
    display: flex;
	align-items: center;
    justify-content: space-between;
	margin-top: 5rem;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`

/* Text styles */
const Title = styled.p`
    
`
