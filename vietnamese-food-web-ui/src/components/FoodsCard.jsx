import { Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FoodsCard = ({ food }) => {
  // Destructure currentItems correctly
  const navigate = useNavigate();
  return (
    <>
      <Col key={food.id} sm={12} md={6} lg={4} className="mb-4">
        <Card>
          <Card.Img
            variant="top"
            src={new URL(`../assets/image/${food.image}`, import.meta.url).href}
            alt={food.name}
            style={{ maxHeight: "200px", cursor: "pointer" }}
          />
          <Card.Body>
            <Card.Title>{food.name}</Card.Title>
            <Card.Text>{food.description}</Card.Text>
            <Card.Text>
              <strong>{food.price} VND</strong>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() => navigate(`/detail/${food.id}`)}
            >
              Order Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default FoodsCard;
