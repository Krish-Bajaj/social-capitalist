import styled from 'styled-components'

import '../styles/work.css'

const Work = () => {
	return (
		<div style={{ background: 'black', color: 'white', textAlign: 'center' }} className="workbody">
			<StyledHeading>What would you like to see?</StyledHeading>
			<StyledSubHeading>
				When it comes to branding, we cover a lot of bases. Explore brand and web case studies
				<br /> or peruse our gallery of custom tailor made content.
			</StyledSubHeading>

			<div class="grid">
				<figure className="workfigure">
					<img
						className="workimage"
						src="https://images.unsplash.com/photo-1552168324-d612d77725e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ5NTU1ODB8&ixlib=rb-4.0.3&q=85"
						alt="A person tossing an analog camera into the air in a darkened room with blue and red lighting. "
						title="photo by Julius Drost for Unsplash"
					/>
				</figure>
				<figure className="workfigure">
					<img
						className="workimage"
						src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ5NTU3MTJ8&ixlib=rb-4.0.3&q=85"
						alt="A group of people partying in a room lit with neon lights. "
						title="photo by Aleksandr Popov for Unsplash"
					/>
				</figure>
				<figure className="workfigure">
					<img
						className="workimage"
						src="https://images.unsplash.com/photo-1571450669798-fcb4c543f6a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ5NTU4Njl8&ixlib=rb-4.0.3&q=85"
						alt="A group of people partying in a room lit with neon lights. "
						title="photo by Aleksandr Popov for Unsplash"
					/>
				</figure>
				<figure className="workfigure">
					<img
						className="workimage"
						src="https://images.unsplash.com/photo-1571450669798-fcb4c543f6a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTQ5NTU4Njl8&ixlib=rb-4.0.3&q=85"
						alt="A group of people partying in a room lit with neon lights. "
						title="photo by Aleksandr Popov for Unsplash"
					/>
				</figure>
			</div>
		</div>
	)
}

export default Work

const StyledHeading = styled.p`
	font-size: 54px;
	font-weight: 500;
	letter-spacing: 0;
	margin-top: 6rem;
	@media (max-width: 768px) {
		font-size: 36px;
		margin-top: 6.5rem;
	}
`

const StyledSubHeading = styled.p`
	font-size: 18px;
	@media (max-width: 768px) {
		font-size: 12px;
	}
`
