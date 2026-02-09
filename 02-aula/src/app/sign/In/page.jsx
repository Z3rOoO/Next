import "./signIn.css"

export default function SignIn() {
    return (
        <>
            <div className="container custon-sign d-flex justify-content-center">
                <div className="row d-flex justify-content-center align-items-center w-100">
                    <div className="col-6 p-4 bg-light rounded custon-signIn">
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label">
                                E-mail
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="EX: Henrique.cosmemk2@gmail.com"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label">
                                Senha
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="formGroupExampleInput2"
                                placeholder="Ex: qwerty"
                            />
                        </div>
                        <div className="mt-4 d-flex justify-content-end gap-3">
                            <a href="/sign/Up"><button className="btn btn-outline-primary" >Cadastre-se</button></a>
                            <a href="/"><button className="btn btn-primary">logar</button></a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}