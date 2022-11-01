import { List } from 'antd'
import styled from 'styled-components'
import Colors from '../../theme'

export const ListStyles = styled(List.Item.Meta)`
  display: 'block';

  .ant-list-item-meta-description {
    color: ${Colors.orange} !important;
    font-style: italic;
  }
`
