import { CSSProperties } from 'react'
import Colors from '../../theme'
 
export const aboutLayoutStyles: CSSProperties = {
  gridColumn: 'span 24',
  display: 'flex',
  gap: '20px',
  backgroundColor: Colors.grey,
  padding: '2rem 3rem',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export const bioStyles: CSSProperties = {
  maxWidth: '80%'
}

export const avatarStyles: CSSProperties = {
  height: '150px',
  width: '150px',
  minHeight: '150px',
  minWidth: '150px',
  border: `8px solid ${Colors.orange}`,
}

export const nameStyles: CSSProperties = {
  color: Colors.white,
  marginBottom: 0,
}

export const roleStyles: CSSProperties = {
  color: Colors.orange,
  marginTop: 0,
}

export const typographyStyles: CSSProperties = {
  color: Colors.white,
}
