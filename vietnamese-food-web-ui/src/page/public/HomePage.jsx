import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HomePage = () => {
  const foods = [
    {
      id: 1,
      name: "Pho",
      description: "Traditional Vietnamese noodle soup",
      price: "$10",
      image: "pho.jpg",
    },
    {
      id: 2,
      name: "Banh Mi",
      description: "Vietnamese sandwich",
      price: "$5",
      image: "banhmi.jpg",
    },
    {
      id: 3,
      name: "Spring Rolls",
      description: "Fresh spring rolls with shrimp and vegetables",
      price: "$7",
      image: "springrolls.jpg",
    },
  ];

  return (
    <>
      <Container>
        <Header />
        <h1 className="my-4" style={{ marginTop: "10%" }}>
          Welcome to Vietnamese Food
        </h1>
        <Row>
          {foods.map((food) => (
            <Col key={food.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={food.image} />
                <Card.Body>
                  <Card.Title>{food.name}</Card.Title>
                  <Card.Text>{food.description}</Card.Text>
                  <Card.Text>
                    <strong>{food.price}</strong>
                  </Card.Text>
                  <Button variant="primary">Order Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {foods.map((food) => (
            <Col key={food.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={food.image} />
                <Card.Body>
                  <Card.Title>{food.name}</Card.Title>
                  <Card.Text>{food.description}</Card.Text>
                  <Card.Text>
                    <strong>{food.price}</strong>
                  </Card.Text>
                  <Button variant="primary">Order Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {foods.map((food) => (
            <Col key={food.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={food.image} />
                <Card.Body>
                  <Card.Title>{food.name}</Card.Title>
                  <Card.Text>{food.description}</Card.Text>
                  <Card.Text>
                    <strong>{food.price}</strong>
                  </Card.Text>
                  <Button variant="primary">Order Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
