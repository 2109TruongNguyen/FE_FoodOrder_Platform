import { Box } from "@mui/material";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../assets/CSS/FoodsCard.scss";
const CardCarousel = ({ foods }) => {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "1.6rem",
        justifySelf: "center",
        width: "75rem",
      }}
    >
      <div className="swiper-button-prev">
        <FaArrowLeft className="icon" />
      </div>
      <div className="swiper-button-next">
        <FaArrowRight className="icon" />
      </div>
      {foods.length > 0 ? (
        <Swiper
          spaceBetween={20}
          loop={true}
          slidesPerView="auto"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          {foods.map((food, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                width: "auto",
                margin: "0.5rem",
              }}
            >
              {food}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p>No food items available for the selected week.</p>
      )}
    </Box>
  );
};

export default CardCarousel;
