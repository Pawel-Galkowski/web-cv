import { CSSProperties } from 'react'

// export const aboutLayoutStyles: CSSProperties = {
//   gridColumn: 'span 12',
//   display: 'grid',
//   gridTemplateColumns: '3fr 1fr',
//   gridTemplateRows: '1fr',
//   gridColumnGap: '20px',
//   gridRowGap: 0,
//   backgroundColor: '#00324a',
//   padding: '2rem 3rem',
//   alignItems: 'center',
// }

export const aboutLayoutStyles: CSSProperties = {
  gridColumn: 'span 24',
  display: 'flex',
  gap: '20px',
  backgroundColor: '#00324a',
  padding: '2rem 3rem',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const bioStyles: CSSProperties = {
  maxWidth: '80%'
}

export const avatarStyles: CSSProperties = {
  border: '8px solid blue',
}

export const nameStyles: CSSProperties = {
  color: 'white',
  marginBottom: 0,
}

export const roleStyles: CSSProperties = {
  color: 'blue',
  marginTop: 0,
}

export const typographyStyles: CSSProperties = {
  color: 'white',
}
