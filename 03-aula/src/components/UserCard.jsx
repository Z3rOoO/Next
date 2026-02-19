export default function UserCard({
    usuario
}) {
    return (<div>
        <div className="card" style={{ width: "18rem" }}>
            <img src="..." className="card-img-top" style={{ height: "200px" }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{usuario.users.firstName}</h5>
                <p className="card-text">
                    Idade: {usuario.users.idade}<br />
                    Profissão: {usuario.profissao}<br />
                    Endereço: {usuario.endereco}<br />
                    Resumo: {usuario.resumo}<br />
                </p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>


    </div>)
}