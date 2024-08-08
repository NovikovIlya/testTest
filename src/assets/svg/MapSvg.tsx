import React from 'react'

type TypeMenuSvgProps = {
	white?: boolean
}

export const MapSvg = ({ white }: TypeMenuSvgProps) => {
	const color = () => (white ? 'white' : '#1F5CB8')

	return (
		<svg
			width="21"
			height="23"
			viewBox="0 0 21 23"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.5583 13.2083C10.9681 13.2083 11.3739 13.1276 11.7525 12.9707C12.1311 12.8139 12.4752 12.584 12.765 12.2943C13.0547 12.0045 13.2846 11.6604 13.4414 11.2818C13.5983 10.9032 13.679 10.4974 13.679 10.0875C13.679 9.67772 13.5983 9.27191 13.4414 8.89329C13.2846 8.51466 13.0547 8.17063 12.765 7.88084C12.4752 7.59105 12.1311 7.36118 11.7525 7.20435C11.3739 7.04752 10.9681 6.9668 10.5583 6.9668C9.73058 6.9668 8.9368 7.29559 8.35155 7.88084C7.76629 8.4661 7.4375 9.25987 7.4375 10.0875C7.4375 10.9152 7.76629 11.709 8.35155 12.2943C8.9368 12.8795 9.73058 13.2083 10.5583 13.2083Z"
				stroke={color()}
				strokeWidth="2"
			/>
			<path
				d="M2.18031 8.26695C4.15079 -0.395129 16.9839 -0.385126 18.9443 8.27696C20.0946 13.3582 16.9339 17.6592 14.1632 20.3199C13.195 21.2536 11.9024 21.7754 10.5573 21.7754C9.21225 21.7754 7.91962 21.2536 6.95146 20.3199C4.1908 17.6592 1.03004 13.3482 2.18031 8.26695Z"
				stroke={color()}
				strokeWidth="2"
			/>
		</svg>
	)
}