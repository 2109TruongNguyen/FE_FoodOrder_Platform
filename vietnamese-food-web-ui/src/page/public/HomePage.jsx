import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { foods } from "../../test/Datatest";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1); // Initial page is 1
  const itemsPerPage = 6; // Number of items per page
  const navigate = useNavigate();
  // Calculate the index range of items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = foods.slice(indexOfFirstItem, indexOfLastItem);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(foods.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <Container>
        <Header />
        <h1 className="my-4" style={{ marginTop: "5rem", textAlign: "center" }}>
          Welcome to Vietnamese Food
        </h1>
        <Row>
          {currentItems.map((food) => (
            <Col key={food.id} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    new URL(`../../assets/image/${food.image}`, import.meta.url)
                      .href
                  }
                  alt={food.name}
                  style={{ maxHeight: "200px", cursor: "pointer" }}
                />
                <Card.Body>
                  <Card.Title>{food.name}</Card.Title>
                  <Card.Text>{food.description}</Card.Text>
                  <Card.Text>
                    <strong>{food.price} VND</strong>
                  </Card.Text>
                  <Button variant="primary" onClick={() => navigate(`/detail/${food.id}`)}>Order Now</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Pagination Controls */}

        <nav
          aria-label="Page navigation example"
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <MDBPagination className="mb-3">
            <MDBPaginationItem>
              <MDBPaginationLink
                onClick={prevPage}
                disabled={currentPage === 1}
                aria-label="Previous"
                style={{ cursor: "pointer" }}
              >
                <span aria-hidden="true">«</span>
              </MDBPaginationLink>
            </MDBPaginationItem>
            {/* <MDBPaginationItem>
              <MDBPaginationLink href="#">1</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink href="#">2</MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink href="#">3</MDBPaginationLink>
            </MDBPaginationItem> */}
            <span style={{ margin: "0 10px" }}>
              Page {currentPage} of {Math.ceil(foods.length / itemsPerPage)}
            </span>
            <MDBPaginationItem>
              <MDBPaginationLink
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(foods.length / itemsPerPage)
                }
                aria-label="Next"
                style={{ cursor: "pointer" }}
              >
                <span aria-hidden="true">»</span>
              </MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPagination>
        </nav>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
