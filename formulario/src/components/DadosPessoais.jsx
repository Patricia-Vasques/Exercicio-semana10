
function DadosPessoais(){
    return(
    <div>
        <div className="col-12">
            <label className="form-label" htmlFor="name">Nome:</label>
            <input className="form-control" name="name" type="text" id="name" placeholder="Digite seu nome" required/>
        </div>

        <form>
            <label htmlFor="email">Email:</label>
            <input className="form-control" name="email" type="email"  id="email" placeholder="Insira seu email" required/>
        </form>
    </div>
    )
}

export default DadosPessoais