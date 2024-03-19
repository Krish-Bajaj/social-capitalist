import Hero from '../components/MLP/Hero'
import Commitments from '../components/MLP/Commitments'
import Clients from '../components/MLP/Clients'
import SwiperMain from '../components/MLP/SwiperMain'
import { ServicesOffered, BlueBanner, BlackBanner, Testimonials } from '../components'

import { SubContainer } from '../App'

import { MLPtestimonials } from '../data'

const MLP = () => {
    return (
        <SubContainer>
            <Hero />
            <SwiperMain />
            <Commitments />
            <ServicesOffered />
            <Clients />
            <BlueBanner />
            <div style={{ marginTop: '5rem' }} />
            <Testimonials data={MLPtestimonials} />
            <BlackBanner />
        </SubContainer>
    )
}

export default MLP