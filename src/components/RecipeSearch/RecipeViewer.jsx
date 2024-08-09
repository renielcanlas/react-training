import React, { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Stars from "../commons/Stars";
import './RecipeViewer.css';

const RecipeViewer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { recipe } = location.state || {};

    useEffect(() => {
        if (!recipe) {
            navigate("/recipe")
        }
    })

    return (
        <div className="recipe-viewer">
            <h1>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} />
            <div className="tags">
                {
                    recipe.tags.map((tag, index) => {
                        return (<span key={index}>{tag}</span>)
                    })
                }
            </div>
            <div className="details">
                <b>Preparation Time:</b> {recipe.prepTimeMinutes} minutes <br />
                <b>Cooking Time: </b> {recipe.cookTimeMinutes} minutes <br />
                <b>Servings: </b> {recipe.servings} <br />
                <b>Difficulty: </b> {recipe.difficulty} <br />
                <b>Cuisine: </b> {recipe.cuisine} <br />
                <b>Calories per serving: </b> {recipe.caloriesPerServing} <br />
                <b>Rating: </b> <Stars rating={recipe.rating} /> <br />
                <b>Reviews: </b> {recipe.reviewCount} <br />
                <b>Meal Type: </b> {JSON.stringify(recipe.mealType)} <br />
            </div>
            <h2>Ingredients: </h2>
            <ul className="ingredients">
                {
                    recipe.ingredients.map((ingredient, index) => {
                        return (<li key={index}>{ingredient}</li>)
                    })
                }
            </ul>
            <h2>Instructions: </h2>
            <ol className="instructions">
                {
                    recipe.instructions.map((ins, index) => {
                        return (<li key={index}>{ins}</li>)
                    })
                }
            </ol>
            <button onClick={() => {navigate(-1)}}>Go Back</button>
        </div>
    )
}

export default React.memo(RecipeViewer)