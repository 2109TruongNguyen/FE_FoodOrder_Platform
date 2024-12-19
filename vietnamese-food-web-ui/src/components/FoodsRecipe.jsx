import React from 'react';
import '../assets/CSS/RecipePage.scss';
import { ingredients } from "../test/Datatest"; // Adjust the path as necessary
import { ListItem, ListItemText } from '@mui/material';

const FoodsRecipe = ({ recipe }) => {
    const ingredient = ingredients.find(ing => ing.Ingredient_ID === recipe.Ingredient_ID);

    if (!ingredient) {
        return <div>Ingredient not found</div>;
    }

    return (
        <>
            {/* show ingredient and quantity */}
            <ListItem>
                <ListItemText primary={`${ingredient.Name} - ${recipe.Quantity} ${recipe.Measurement}`} />
            </ListItem>
        </>
    );
};


export default FoodsRecipe;
