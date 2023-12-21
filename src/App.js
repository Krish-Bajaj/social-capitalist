import './App.css'

import { InstagramEmbed } from 'react-social-media-embed'

function App() {
	return (
		<div className="App">
			<header className="App-header">

				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<InstagramEmbed url="https://www.instagram.com/p/CzvmJnpPrQY/" width={328} />
				</div>
				<iframe id="zoho" width='100%' height='585px' src='https://socialcapitalist.zohobookings.in/portal-embed#/customer/socialcapitalist' frameborder='0' allowfullscreen='' > </iframe>

			</header>
		</div>
	)
}

export default App
