import React from "react";
import { Col, Row } from "react-bootstrap";

 const DatesAction = ({deletData,showData}) => {

  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button onClick={deletData} className="btn-style py-2" >مسح الكل</button>
        <button onClick={showData} className="btn-style py-2" >عرض البيانات</button>
      </Col>
    </Row>
  );
};
export default DatesAction;
