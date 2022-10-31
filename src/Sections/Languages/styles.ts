import { List } from 'antd'
import styled from 'styled-components'

export const ListStyles = styled(List.Item.Meta)`
  display: 'block';

  .ant-list-item-meta-description {
    color: red !important;
    font-style: italic;
  }
`
