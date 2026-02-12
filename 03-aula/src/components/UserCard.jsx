export default function UserCard({
    usuario
    // nome,
    // idade,
    // endereco,
    // profissao,
    // resumo
}) {
    return (<div>

        {/* <h2>{nome}</h2>
        <p>{idade}</p>
        <p>{endereco}</p>
        <p>{profissao}</p>
        <p>{resumo}</p> */}
        <div className="card" style={{ width: "18rem" }}>
            <img src={usuario.foto} className="card-img-top" style={{ height: "200px" }}  alt="..." />
            <div className="card-body">
                <h5 className="card-title">{usuario.nome}</h5>
                <p className="card-text">
                    Idade: {usuario.idade}<br/>
                    Profissão: {usuario.profissao}<br/>
                    Endereço: {usuario.endereco}<br/>
                    Resumo: {usuario.resumo}<br/>
                </p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>


    </div>)
}