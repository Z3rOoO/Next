"use client"

import RecipesCard from "@/components/RecipesCard";
import { useEffect, useState } from "react"

export default function Api() {

    const [recipes, setRecipes] = useState(null)

    async function fetchAllRecipes() {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(data => setRecipes(data.recipes));
    }

    useEffect(() => { fetchAllRecipes(); }, [])

    useEffect(() => { console.log(recipes) }, [recipes])

    return (<>
        <h2>Aprendendo a consumir uma API com useEffect</h2>

        <div className="container-fluid d-flex pt-5 w-100 justify-content-center">
            <div className="container row d-flex justify-content-center  gap-4">
                {
                    recipes !== null && recipes.map((recipes, id) => {
                        return (
                            <RecipesCard key={id}
                                recipes={recipes} />
                        )
                    })
                }
            </div>
        </div>
    </>)
}