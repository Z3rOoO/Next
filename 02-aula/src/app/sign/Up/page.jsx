import "./signUp.css"

export default function SignUp() {
    return (
        <>
            <div className="container custon-sign d-flex justify-content-center">
                <div className="row d-flex justify-content-center align-items-center w-100">
                    <div className="col-6 p-4 bg-light rounded custon-signIn">
                        <form className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputEmail4" className="form-label">
                                    E-mail
                                </label>
                                <input type="email" className="form-control" id="inputEmail4"
                                    placeholder="EX: Henrique.cosmemk2@gmail.com" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputPassword4" className="form-label">
                                    Senha
                                </label>
                                <input type="password" className="form-control" id="inputPassword4" placeholder="Ex: qwerty" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress" className="form-label">
                                    Rua
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress"
                                    placeholder="EX: Rubens Nunes Campos"
                                />
                            </div>
                            <div className="col-12">
                                <label htmlFor="inputAddress2" className="form-label">
                                    Bairro
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress2"
                                    placeholder="EX: Jardim Luzitano"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputCity" className="form-label">
                                    Cidade
                                </label>
                                <input type="text" className="form-control" id="inputCity" placeholder="EX: Mauá" />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputState" className="form-label">
                                    Estado
                                </label>
                                <select id="inputState" className="form-select">
                                    <option selected="">Escolher...</option>
                                    <option>SP</option>
                                    <option>RJ</option>
                                    <option>BH</option>
                                    <option>PA</option>
                                    <option>PR</option>
                                    <option>SL</option>
                                    <option>ND</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <div className="mt-4 d-flex justify-content-end gap-3">
                                    <a href="/sign/Up"><button className="btn btn-outline-primary" >Logar</button></a>
                                    <a href="/"><button className="btn btn-primary">Cadastrar</button></a>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </div >
        </>
    )
}