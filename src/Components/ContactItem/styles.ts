import { CSSProperties } from "react";
import Colors from '../../theme'

export const contactItemStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center'
}

export const linkStyles: CSSProperties = {
    color: Colors.white,
    fontWeight: 'bold',
    textDecoration: 'none',
}