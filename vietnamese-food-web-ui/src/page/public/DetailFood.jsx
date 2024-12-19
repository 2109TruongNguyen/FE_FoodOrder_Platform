import React from 'react';
import { Container, Typography, Box, Card } from '@mui/material';
import { useParams } from 'react-router-dom';
import { foods, recipe } from "../../test/Datatest";
import FoodsInfo from "../../components/FoodsInfo";
import FoodsRecipe from "../../components/FoodsRecipe";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import '../../assets/CSS/RecipePage.scss';

const DetailFood = () => {
    const { id } = useParams();
    const food = foods.find(food => food.id.toString() === id);

    if (!food) {
        return <div>Food not found</div>;
    }

    const filteredRecipe = recipe.filter(item => item.F_ID === food.id);

    return (
        <>
            <Header />
            <Container className="detail-container">
                <Box
                    display="grid"
                    gridTemplateColumns={{ xs: '1fr', md: '2fr 1fr' }}
                    gap={3}
                >
                    {/* handle information of food */}
                    <Box>
                        <FoodsInfo food={food} />
                    </Box>
                    {/* handle recipe of food */}
                    <Box>
                        <Card className="food-card" sx={{ mt: 10.77 }}>
                            <Typography variant="h6" sx={{ mt: 0.77, ml: 1.4 }}>
                                Ingredients We Send
                            </Typography>
                            {filteredRecipe.map((recipe, index) => (
                                <FoodsRecipe recipe={recipe} key={index} />
                            ))}
                        </Card>
                    </Box>
                </Box>
            </Container>
            <Footer />
        </>
    );
};

export default DetailFood;
