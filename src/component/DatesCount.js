import React from 'react'
import { Col, Row } from 'react-bootstrap'

export const DatesCount = ({person}) => {
  return (
    <Row className="justify-content-center py-2 ">
    <Col sm="8" className="">
      لديك {person.length} مواعيد
    </Col>
  </Row>
  )
}
export default DatesCount;
