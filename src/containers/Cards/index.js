import React from "react";
import Layout from "../../components/Layout/index";
import { CardHeader } from "../../components/UI/Card";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";

/**
 * @author
 * @function Cards
 **/

const Cards = (props) => {
  return (
    <Layout>
      <Container>
        <h1>Card components</h1>
        <Row className="justify-content-md-center">
          <Col md="4">
            <h4>DESTOP</h4>
            <CardHeader></CardHeader>
          </Col>
          <Col md="4">
            <h4>ANDROID</h4>
            <CardHeader android></CardHeader>

          </Col>
          <Col md="4">
            <h4>IOS</h4>
            <CardHeader ios></CardHeader>

          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Cards;
