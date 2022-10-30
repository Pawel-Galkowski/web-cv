import { Typography } from 'antd'
import styled from 'styled-components'

export const StyledTitle = styled(Typography.Title)`
    letter-spacing: 1px;
    text-transform: uppercase;
    color: blue !important;
    margin-bottom: 1.2rem;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        width: 60%;
        height: .2rem;
        background-color: #ccc;
        border-radius: 12px;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    @media screen and (max-width:823px) {
		'&::after' {
            width: '40%'
		}
	}
	@media screen and (max-width:681px) {
		&::after {
			width: 30%;
		}
	}
}`
