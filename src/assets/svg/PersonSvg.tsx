import React from 'react';


type TypeMenuSvgProps = {
	white?: boolean
}
export const PersonSvg = ({ white }: TypeMenuSvgProps) => {
	const color = () => (white ? 'white' : '#1F5CB8')

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="42"
			height="43"
			viewBox="0 0 42 43"
			fill="none"
		>
			<path
				d="M41 21.6797C41 27.7874 38.2615 33.2566 33.9462 36.9182C30.4615 39.8874 25.9385 41.6797 21 41.6797C15.7385 41.6797 10.9538 39.6489 7.38462 36.3181C3.45385 32.672 1 27.4643 1 21.6797C1 10.6412 9.95385 1.67969 21 1.67969C32.0462 1.67969 41 10.6412 41 21.6797Z"
				stroke={color()}
				strokeWidth="2"
			/>
			<path
				d="M33.9463 36.9179C30.4617 39.8871 25.9386 41.6794 21.0002 41.6794C15.7386 41.6794 10.954 39.6486 7.38477 36.3179C7.40784 36.1871 7.43092 36.0563 7.46169 35.9256C8.46938 31.4409 10.7155 28.6563 14.1463 27.5871C14.6694 27.4256 15.2155 27.364 15.7463 27.364C19.0078 27.3409 22.2694 27.3486 25.5309 27.3563C29.5694 27.364 33.2386 31.4871 33.9232 36.764C33.9309 36.8179 33.9386 36.864 33.9463 36.9179Z"
				stroke={color()}
				strokeWidth="2"
			/>
			<path
				d="M13.9141 19.9334C13.9141 24.2411 17.4525 27.0565 20.9602 26.9949H20.9756H20.991C24.691 27.0642 28.0448 24.0334 28.0833 20.0103C28.1294 15.9411 24.7833 12.8718 21.0371 12.8488C17.4064 12.8257 13.9141 15.6642 13.9141 19.9257V19.9334Z"
				stroke={color()}
				strokeWidth="2"
			/>
		</svg>
	)
}