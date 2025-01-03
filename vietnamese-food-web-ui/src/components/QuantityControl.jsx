import { useState, useEffect } from "react";
import { IoAdd, IoClose } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { Box, IconButton, Typography } from "@mui/material";

const QuantityControl = ({ itemId, onUpdate }) => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const storedQuantity = localStorage.getItem(`product_${itemId}`);
    if (storedQuantity) {
      setNumber(parseInt(storedQuantity, 10));
    }
  }, [itemId]);

  const updateLocalStorage = (newQuantity) => {
    localStorage.setItem(`product_${itemId}`, newQuantity);
    if (onUpdate) {
      onUpdate(newQuantity); // Gọi callback để cập nhật số lượng
    }
  };

  const handleIncrease = () => {
    const newQuantity = number + 1;
    setNumber(newQuantity);
    updateLocalStorage(newQuantity);
  };

  const handleDecrease = () => {
    if (number > 0) {
      const newQuantity = number - 1;
      setNumber(newQuantity);
      updateLocalStorage(newQuantity);
    }
  };

  const handleClose = () => {
    localStorage.removeItem(`product_${itemId}`);
    setNumber(0);
    if (onUpdate) {
      onUpdate(0); // Gọi callback để cập nhật số lượng về 0
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <IconButton color="secondary" onClick={handleClose}>
        <IoClose size={24} />
      </IconButton>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={handleDecrease} color="primary">
          <FiMinus size={24} />
        </IconButton>
        <Typography variant="h6" sx={{ marginX: 2 }}>
          {number}
        </Typography>
        <IconButton onClick={handleIncrease} color="primary">
          <IoAdd size={24} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default QuantityControl;
