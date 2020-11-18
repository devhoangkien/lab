import React from "react";
import {

  Card,
  Button,
  
} from "react-bootstrap";

const CardHeader = ({ android, ios }) => {
  let card = {
    padding: "10px 12px",
    border: "none",
    color: "white",
    borderRadius: "6px",
    backgroundColor: "#0a60ff",
    width: "100%"
  };
  let cardheader = {
    fontSize:"20px"
  }
  if (android) {
    card = {
      padding: "10px 13px",
      border: "none",
      color: "white",
      backgroundColor: "#3f51b5",
      textTransform: "uppercase",
      fontSize: "12px",
    };
    cardheader = {
      fontSize:"20px"
    }
  }
  if (ios) {
    card = {
      padding: "10px 13px",
      border: "none",
      color: "white",
      backgroundColor: "#3ff1bb",
      textTransform: "uppercase",
      fontSize: "12px",
    };
    cardheader = {
      fontSize:"20px",
      color: "red"
    }
    
  }
  return (
    <Card style={card}>
      <Card.Header style={cardheader}>Card Header</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer> Card Footer</Card.Footer>
    </Card>
  );
};

export { CardHeader };
