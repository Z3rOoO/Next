export default function UserCard({
    recipes
    // nome,
    // idade,
    // endereco,
    // profissao,
    // resumo
}) {
    return (
        <div className="card col-4  p-0 box-shadow border-0" style={{ width: "18rem" }}>
            <img src={recipes.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{recipes.name}</h5>
                <div className="row"><div className="col-6">T.Preparo: {recipes.prepTimeMinutes}</div><div className="col-6">T.Cozimento: {recipes.cookTimeMinutes}</div></div>
                <div className="row"><div className="col-6">Serve: {recipes.servings} Pessoas</div><div className="col-6">Calorias: {recipes.caloriesPerServing}</div></div>
                <h6 className="mt-4">ingredients</h6>
                <p className="card-text">

                    <ul>
                        {recipes.ingredients.map((data) => {
                            return (
                                <li>{data}</li>
                            )
                        })}
                    </ul>
                </p>
                <h6 className="mt-4">instructions</h6>
                <p className="card-text">

                    <ul>
                        {recipes.instructions.map((data) => {
                            return (
                                <li>{data}</li>
                            )
                        })}
                    </ul>
                </p>
            </div>
        </div>



    )
}