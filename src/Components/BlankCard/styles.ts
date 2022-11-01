import Colors from '../../theme'


export const blankCardStyles = {
	backgroundColor: Colors.ocean,
	maxWidth: "1240px",
}

export const cardStyles = {
    border: "1px solid gray",
}

export const mainContentStyles = {
	minHeight: "100vh",
	width: "80%",
	margin: "2rem auto",
	display: "grid",
	gridTemplateColumns: "repeat(24, 1fr)",
}

export const firstSectionStyles = {
	gridColumn: "span 15",
	backgroundColor: Colors.white,
}

export const secondSectionStyles = {
	gridColumn: "span 9",
	backgroundColor: Colors.white,
}

export const mainContentPadding = {
    padding: '2rem 3rem',
}
