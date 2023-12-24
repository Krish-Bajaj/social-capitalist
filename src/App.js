import { Routes, BrowserRouter, Route } from 'react-router-dom'
// import { InstagramEmbed } from 'react-social-media-embed'
import styled from 'styled-components'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MLP from './pages/MLP'
import './styles/App.css'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AppContainer>
				<SubContainer>
					<Routes>
						<Route path="/" exact={true} element={<MLP />} />
					</Routes>
				</SubContainer>
				{/* <div style={{ display: 'flex', justifyContent: 'center' }}>
					<InstagramEmbed url="https://www.instagram.com/p/CzvmJnpPrQY/" width={328} />
				</div>
				<iframe title="zoho" width='100%' height='585px' src='https://socialcapitalist.zohobookings.in/portal-embed#/customer/socialcapitalist' frameborder='0' allowfullscreen='' > </iframe> */}
				<Footer />
			</AppContainer>
		</BrowserRouter>
	)
}

export default App

const AppContainer = styled.div`
	/* For the footer */
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const SubContainer = styled.div`
	padding: 120px 80px;
	@media (max-width: 768px) {
		padding: 120px 24px;
		text-align: center;
	}
`
