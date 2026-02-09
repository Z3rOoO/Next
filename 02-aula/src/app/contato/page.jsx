import "./contato.css"

export default function Contato() {
    return (
        <>
            <div className="container custon-sign d-flex justify-content-center">
                <div className="row d-flex justify-content-center align-items-center w-100">
                    <div className="col-6 p-4 bg-light rounded custon-signIn">
                        <div className="mb-4 text-center"><h4>ENTRAR EM CONTATO</h4></div>
                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput" className="form-label">
                                Titulo
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="EX: Proposta de parceria"
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <div className="mt-4 d-flex justify-content-end gap-3">
                            <a href="/"><button className="btn btn-outline-primary" >Cancelar</button></a>
                            <a href="/"><button className="btn btn-primary">Enviar</button></a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}