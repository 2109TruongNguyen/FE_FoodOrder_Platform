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
import WeeklyMenu from "../../components/WeeklyMenu";
import FoodsCard from "../../components/FoodsCard";
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
      <Header />
      <WeeklyMenu />
      <Container>
        <h1 className="my-4" style={{ marginTop: "5rem", textAlign: "center" }}>
          Welcome to Vietnamese Food
        </h1>
        <Row>
          {currentItems.map((food) => (
            <FoodsCard key={food.id} food={food} />
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
