import Hero from '../components/AboutUs/Hero'
import { ServicesOffered, BlueBanner } from '../components'

import { SubContainer } from '../App'

const MLP = () => {
	return (
		<SubContainer>
			<Hero />
			<ServicesOffered />
			<div style={{ marginTop: '1.5rem' }} />
			<BlueBanner />
		</SubContainer>
	)
}

export default MLP
