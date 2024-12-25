import { useState } from "react";
import { Box, Button } from "@mui/material";
import { foods, weekItems, weeklyMenus } from "../test/Datatest";
import FoodsCard from "./FoodsCard";
import CardCarousel from "./CardCarousel";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WeeklyMenu = () => {
  const fixedWeeks = weeklyMenus.slice(0, 4);
  const [activeItem, setActiveItem] = useState(fixedWeeks[0].W_ID);

  const filteredWeekItems = weekItems.filter(
    (item) => item.W_ID === activeItem
  );

  const weekFoods = filteredWeekItems
    .map((weeklyItem) => {
      const food = foods.find(
        (food) => String(food.id) === String(weeklyItem.F_ID)
      );
      return food || null;
    })
    .filter((food) => food !== null);

  // Chuyển đổi dữ liệu thành các phần tử <FoodsCard />
  const foodCards = weekFoods.map((food) => (
    <FoodsCard key={food.id} food={food} />
  ));

  return (
    <>
      {/* Nút điều hướng */}
      <Box
        display="flex"
        justifyContent="center"
        bgcolor="#1976d2"
        color="white"
        marginTop="4rem"
        flexWrap="wrap"
      >
        {fixedWeeks.map((week, index) => {
          const startMonth =
            monthNames[parseInt(week.StartDate.substring(5, 7), 10) - 1];
          const endMonth =
            monthNames[parseInt(week.EndDate.substring(5, 7), 10) - 1];
          const displayMonth =
            startMonth === endMonth ? endMonth : `${startMonth} - ${endMonth}`;
          return (
            <Button
              key={index}
              sx={{
                cursor: "pointer",
                padding: "0.5rem",
                color:
                  activeItem === week.W_ID
                    ? "white"
                    : "rgba(255, 255, 255, 0.7)",
                backgroundColor:
                  activeItem === week.W_ID ? "#005bb5" : "transparent",
                borderRadius: "0.2rem",
                position: "relative",
                margin: "0.5rem",
                "&::after":
                  activeItem === week.W_ID
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: "-0.5rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "0",
                        height: "0",
                        borderLeft: "10px solid transparent",
                        borderRight: "10px solid transparent",
                        borderTop: "10px solid #005bb5",
                      }
                    : {},
                "&:hover": {
                  backgroundColor: "#005bb5",
                  color: "white",
                },
              }}
              onClick={() => setActiveItem(week.W_ID)}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div>{displayMonth}</div>
                <div>
                  {week.StartDate.substring(8, 10)}-
                  {week.EndDate.substring(8, 10)}
                </div>
              </div>
            </Button>
          );
        })}
      </Box>

      {/* Truyền các FoodsCard vào CardCarousel */}
      <Box textAlign="center" marginTop="16px" padding="0 1rem">
        <CardCarousel foods={foodCards} />
      </Box>
    </>
  );
};

export default WeeklyMenu;
