import { CSSProperties } from 'react'
import Colors from '../../theme'

export const appStyles: CSSProperties = {
  margin: 0,
  padding: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: Colors.black
}

export const centerStyles: CSSProperties = {
  margin: 0,
  gap: '16px',
  padding: 0,
  display: 'flex',
  width: 'auto',
  maxWidth: '1600px'
}
