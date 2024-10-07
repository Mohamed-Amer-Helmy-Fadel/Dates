import React from "react";
import { Col, Row } from "react-bootstrap";


export const DatesList = ({person}) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8" className="">
        <div className="rectangle p-2">
          {person.length ? (
            person.map((item) => (
              <div key={item.id} className="d-flex border-bottom mx-3 my-3">
                <img src="p1.jpg" alt="bla" className="img-avatar" />
                <div className="px-2">
                  <p className="d-inline fs-4">{item.name}</p>
                  <p className="">{item.date}</p>
                </div>
              </div>

            ))
          ) : (
            <h2 className="p-5 text-center"> لا يوجد مواعيد اليوم </h2>
          )}
        </div>
      </Col>
    </Row>
  );
};
export default DatesList;
