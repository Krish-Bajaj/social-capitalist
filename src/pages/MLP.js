import Hero from '../components/MLP/Hero'
import Commitments from '../components/MLP/Commitments'
import Clients from '../components/MLP/Clients'
import { ServicesOffered, BlueBanner } from '../components'

const MLP = () => {
    return (
        <>
            <Hero />
            <Commitments />
            <ServicesOffered />
            <Clients />
            <BlueBanner />
        </>
    )
}

export default MLP