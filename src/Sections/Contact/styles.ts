export const ContactInfoStyles = {
	gridColumn: 'span 24',
	backgroundColor: 'darkslategray',
	display: 'grid',
	padding: '1rem 3rem',
	gridTemplateColumns: 'repeat(2, auto)',
	color: 'white',

	'& > *': {
		display: 'flex',
		flexDirection: 'row',
		gap: '10px',
		alignItems: 'center',
		fontWeight: '600',
		paddingBottom: '4px',
	},

	'& a': {
		color: 'white',
	},
}
