import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import MyCardForm from "../components/MyCartForm.jsx";
import { Box, Typography, Card, Button } from "@mui/material";

const Cart = ({ userId }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateCart = useCallback(() => {
    const storedCart = JSON.parse(localStorage.getItem(`cart_${userId}`)) || [];
    setCart(storedCart);

    let items = 0;
    let price = 0;
    storedCart.forEach((item) => {
      const quantity =
        parseInt(localStorage.getItem(`product_${item.id}`), 10) || 0;
      items += quantity;
      price += (item.price || 0) * quantity;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [userId]);

  const updateItem = (id, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    updateCart();
  };

  useEffect(() => {
    updateCart();

    const handleStorageChange = (event) => {
      if (event.key === `cart_${userId}` || event.key.startsWith("product_")) {
        updateCart();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [userId, updateCart]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <h1>Giỏ hàng</h1>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {cart.length === 0 ? (
          <p>Giỏ hàng trống!</p>
        ) : (
          cart.map((item, index) => (
            <MyCardForm
              key={index}
              item={item}
              onUpdate={(newQuantity) => updateItem(item.id, newQuantity)}
            />
          ))
        )}
      </div>

      <Box sx={{ marginTop: "auto", width: "100%" }}>
        <Card
          sx={{
            boxShadow: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px",
          }}
        >
          <Box>
            <Typography variant="h6">Items: {totalItems}</Typography>
            <Typography variant="h6">
              Sub total: ${totalPrice.toFixed(2)}
            </Typography>
          </Box>
          <Link
            to={`/payment?userId=${userId}`}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" color="primary">
              Buy Now
            </Button>
          </Link>
        </Card>
      </Box>
    </div>
  );
};

export default Cart;
