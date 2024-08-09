import React from "react";
import './RecipeLink.css'
import { useNavigate } from "react-router-dom";

const RecipeLink = (recipeInput) => {

    const navigate = useNavigate();

    const handleClick = (event, recipe) => {
        event.preventDefault()
        navigate(`/recipe/${recipe.name}`, {state: {recipe} })
    }

    return (
        <div className="recipe-link">
            <div className="image-container">
                <img src={recipeInput.recipe.image} alt={recipeInput.recipe.name} />
            </div>
            <a onClick={(event) => handleClick(event, recipeInput.recipe)} href="recipe" className="info-container">
                <h2>{recipeInput.recipe.name}</h2>
                {
                    recipeInput.recipe.tags.map((tag) => {
                        return (
                            <span>{tag}</span>
                        )
                    })
                }
            </a>
        </div>
    )
}

export default React.memo(RecipeLink);