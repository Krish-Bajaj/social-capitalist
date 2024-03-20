import { useState, useEffect } from 'react'

import '../styles/common.css'

export const CoolText = ({ text }) => {
	const [textIndex, setTextIndex] = useState(0)
	const [textColor, setTextColor] = useState('')
	const textValues = text
	const colors = ['#FF5733', '#FFC300', '#C70039', '#900C3F']

	useEffect(() => {
		const interval = setInterval(() => {
			setTextIndex(prevIndex => (prevIndex + 1) % textValues.length)
			setTextColor(colors[Math.floor(Math.random() * colors.length)])
		}, 2500)

		return () => clearInterval(interval)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [textValues.length])

	return (
		<>
			<div className="rotate-text">
				<FadeInText key={textIndex} color={textColor}>
					{textValues[textIndex]}!
				</FadeInText>
			</div>
		</>
	)
}

function FadeInText({ children, color }) {
	const [isVisible, setIsVisible] = useState(true)

	useEffect(() => {
		setIsVisible(true)
		const timeout = setTimeout(() => {
			setIsVisible(false)
		}, 500) // Fade out duration (5000ms - 500ms)
		return () => clearTimeout(timeout)
	}, [children])

	return (
		<div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ color: color }}>
			{children}
		</div>
	)
}
