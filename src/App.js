import { Routes, BrowserRouter, Route } from 'react-router-dom'
// import { InstagramEmbed } from 'react-social-media-embed'
import styled from 'styled-components'

import { Navbar, Footer } from './components'
import { MLP, AboutUs } from './pages'
import './styles/App.css'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AppContainer>
				<SubContainer>
					<Routes>
						<Route path="/" exact={true} element={<MLP />} />
						<Route path="/about-us" exact={true} element={<AboutUs />} />
					</Routes>
				</SubContainer>
				{/* <div style={{ display: 'flex', justifyContent: 'center' }}>
					<InstagramEmbed url="https://www.instagram.com/p/CzvmJnpPrQY/" width={328} />
				</div> */}
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
