import { Suspense, useState } from "react";
import RecipeLink from "./RecipeLink";
import './RecipeSearch.css';

const RecipeSearch = () => {
    const [recipeList, setRecipeList] = useState();
    const [searchInput, setSearchInput] = useState();

    const handleSearch = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get('search');
        setSearchInput(query);
        fetch(`https://dummyjson.com/recipes/search?skip=0&limit=9999&q=${query}`)
            .then(response => response.json())
            .then((data) => {
                setRecipeList(data.recipes);
            })
    }

    return (
        <>
            <header>
                <h1>Cookbook - by Ren</h1>
                <form onSubmit={handleSearch}>
                    <label htmlFor="search">Search: </label>
                    <input type="search" name="search" value={searchInput} placeholder="Craving for something?" />
                    <button type="submit">Start Cooking!</button>
                </form>
            </header>
            <main>
                <Suspense fallback="<p>Loading results</p>">
                {
                    (recipeList && recipeList.length > 0) ?
                    (
                        recipeList.map((recipe, index) => {
                            return (
                                <>
                                    <RecipeLink key={index} recipe={recipe} />
                                </>
                            )
                        })
                    )
                    :
                    (<p>No Results Found!</p>)
                }
                </Suspense>
            </main>
        </>
    )
}

export default RecipeSearch;