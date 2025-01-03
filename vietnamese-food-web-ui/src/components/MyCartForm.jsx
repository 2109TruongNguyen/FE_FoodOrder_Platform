/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import QuantityControl from "./QuantityControl";

const MyCardForm = ({ item, onUpdate }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 2,
        padding: 2,
        borderBottom: "1px solid #ddd",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img
          src={new URL(`../assets/image/${item.image}`, import.meta.url).href}
          alt="Tour"
          style={{
            width: 100,
            height: 100,
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            {item.name}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "#22181C" }}>
            ${item.price}
          </Typography>
        </Box>
      </Box>
      <QuantityControl itemId={item.id} onUpdate={onUpdate} />
    </Box>
  );
};

export default MyCardForm;
