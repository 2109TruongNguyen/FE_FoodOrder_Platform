import { useState, useEffect } from "react";
import { Container, Typography, Box, Card } from "@mui/material";
import { useParams } from "react-router-dom";
import { foods, recipe, users } from "../../test/Datatest";
import FoodsInfo from "../../components/FoodsInfo";
import FoodsRecipe from "../../components/FoodsRecipe";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../assets/CSS/RecipePage.scss";

const DetailFood = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  // Lấy thông tin món ăn theo ID
  const food = foods.find((food) => food.id.toString() === id);

  // Lấy thông tin người dùng (giả lập từ `users[2]`)
  useEffect(() => {
    const selectedUser = users[2];
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, []);

  // Nếu không tìm thấy món ăn
  if (!food) {
    return (
      <Container className="detail-container">
        <Typography variant="h6" color="error" textAlign="center">
          Food not found!
        </Typography>
      </Container>
    );
  }

  // Lọc công thức liên quan đến món ăn
  const filteredRecipe = recipe.filter((item) => item.F_ID === food.id);

  return (
    <>
      <Header />
      <Container className="detail-container">
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", md: "2fr 1fr" }}
          gap={3}
        >
          {/* Thông tin món ăn */}
          <Box>
            {user ? (
              <FoodsInfo food={food} userId={user.id} />
            ) : (
              <Typography variant="body1" color="textSecondary">
                Loading user information...
              </Typography>
            )}
          </Box>

          {/* Công thức nấu ăn */}
          <Box>
            <Card className="food-card" sx={{ mt: 10.77 }}>
              <Typography variant="h6" sx={{ mt: 0.77, ml: 1.4 }}>
                Ingredients We Send
              </Typography>
              {filteredRecipe.length > 0 ? (
                filteredRecipe.map((recipe, index) => (
                  <FoodsRecipe recipe={recipe} key={index} />
                ))
              ) : (
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ ml: 1.4 }}
                >
                  No ingredients available for this dish.
                </Typography>
              )}
            </Card>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default DetailFood;
