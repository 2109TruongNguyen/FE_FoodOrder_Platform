import React from 'react';
import { Card, CardContent, CardMedia, CardHeader, Typography, Button } from '@mui/material';
import ShowMoreText from 'react-show-more-text';
import '../assets/CSS/RecipePage.scss';

const FoodsInfo = ({ food }) => {
    return (
        <>
            {/* show detail food */}
            <div className="custom-card">
                <CardHeader
                    title={food.name}
                    sx={{
                        ".MuiCardHeader-title": {
                            color: "#000", // Màu đen
                            fontWeight: "bold", // Làm đậm nếu cần
                        },
                    }}
                />

                <CardMedia
                    component="img"
                    alt={`Phở - ${food.name}`}
                    height="400"
                    image={new URL(`../assets/image/${food.image}`, import.meta.url).href}
                    title={food.name}
                />
                <Card className="food-card">
                    <CardContent>
                        <div className="price-and-buttons">
                            <Typography variant="body3" className="price-text">
                                <strong>Price:</strong> {food.price}
                            </Typography>
                            <div className="button-group">
                                <Button href="#" variant="contained" color="primary">
                                    Buy Food
                                </Button>
                                <Button href="#" variant="contained" color="primary">
                                    Buy Ingredient
                                </Button>
                            </div>
                        </div>
                        <Typography variant="body3">
                            <strong>Origin:</strong> {food.Origin}
                        </Typography>
                    </CardContent>
                </Card>


                <Card className="food-card"  >
                    <CardContent style={{cursor: "pointer"}}>
                        <ShowMoreText
                            lines={3}
                            more="Show more"
                            less="Show less"
                            className="content-css"
                            anchorClass="my-anchor-css-class"
                            expanded={false}
                            width={280} >
                            <Typography variant="body3" >
                                {food.description}
                            </Typography>
                        </ShowMoreText>
                        <Typography variant="h6" component="div" marginTop="20px">
                            Way of Cooking
                        </Typography>
                        <ShowMoreText
                            lines={3}
                            more="Show more"
                            less="Show less"
                            className="content-css"
                            anchorClass="my-anchor-css-class"
                            expanded={false} 
                            style={{ cursor: "pointer" }}>
                            {food.WayCooking.map((step, index) => (
                                <Typography variant="body3" key={index}>
                                    {step}
                                </Typography>
                            ))}                          
                        </ShowMoreText>
                    </CardContent>
                </Card>
            </div>
        </>

    );
};

export default FoodsInfo;
