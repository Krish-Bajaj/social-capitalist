import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { InstagramEmbed } from 'react-social-media-embed'
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
				<Routes>
					<Route path="/" exact={true} element={<MLP />} />
				</Routes>
				{/* <div style={{ display: 'flex', justifyContent: 'center' }}>
					<InstagramEmbed url="https://www.instagram.com/p/CzvmJnpPrQY/" width={328} />
				</div>
				<iframe title="zoho" width='100%' height='585px' src='https://socialcapitalist.zohobookings.in/portal-embed#/customer/socialcapitalist' frameborder='0' allowfullscreen='' > </iframe> */}
			</AppContainer>
		</BrowserRouter>
	)
}

export default App

const AppContainer = styled.div`
	padding: 120px 80px;
	display: flex;
	flex-direction: column;
	@media (max-width: 768px) {
		padding: 120px 24px;
	}
`
