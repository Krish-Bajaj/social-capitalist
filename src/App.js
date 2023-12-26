import { Routes, BrowserRouter, Route } from 'react-router-dom'
import styled from 'styled-components'

import ScrollToTop from './utils/ScrollToTop'

import { Navbar, Footer } from './components'
import { MLP, AboutUs, Services } from './pages'

import './styles/App.css'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<AppContainer>
				<ScrollToTop />
				<Routes>
					<Route path="/" exact={true} element={<MLP />} />
					<Route path="/about-us" element={<AboutUs />} />
					<Route path="/services/:id" element={<Services />} />
				</Routes>
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

export const SubContainer = styled.div`
	padding: 120px 80px;
	@media (max-width: 768px) {
		padding: 120px 24px;
		text-align: center;
	}
`
