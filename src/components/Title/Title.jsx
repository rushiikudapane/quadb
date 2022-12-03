import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Title.css";

const Title = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="title" style={{ fontSize: "70px" }}>
              Movies
            </h1>
          </Col>
          <Col>
            <h3 className="subTitle">application</h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Title;
