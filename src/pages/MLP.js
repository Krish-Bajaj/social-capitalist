import Hero from '../components/MLP/Hero'
import Commitments from '../components/MLP/Commitments'
import Clients from '../components/MLP/Clients'
import { ServicesOffered, BlueBanner, BlackBanner, Testimonials } from '../components'

import { MLPtestimonials } from '../data'

const MLP = () => {
    return (
        <>
            <Hero />
            <Commitments />
            <ServicesOffered />
            <Clients />
            <BlueBanner />
            <div style={{ marginTop: '5rem' }} />
            <Testimonials data={MLPtestimonials} />
            <BlackBanner />
        </>
    )
}

export default MLP