import { FC } from 'react'
import { Col, Row } from 'antd';
import { containerStyles, cardStyles } from './styles';

const BlankCard: FC = (): JSX.Element => {
  return (
    <Row style={containerStyles} >
      <Col span={24} style={cardStyles}>
        assd
      </Col>
    </Row>
  )
}

export default BlankCard