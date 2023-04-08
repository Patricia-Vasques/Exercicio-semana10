function Endereco() {
    <div>
        <div className="col-12">
            <label className="form-label" htmlFor="logradouro">Logradouro:</label>
            <input className="form-control" name="logradouro" type="text" id="logradouro" placeholder="Digite seu logradouro" required/>
        </div>

        <div className="col-12">
            <label className="form-label" htmlFor="numero">Número:</label>
            <input className="form-control" name="numero" type="number" id="numero" placeholder="Digite o número" required/>
        </div>

        <div className="col-12">
            <label className="form-label" htmlFor="bairro">Bairro:</label>
            <input className="form-control" name="bairro" type="text" id="bairro" placeholder="Digite seu bairro" required/>
        </div>

        <div className="col-12">
            <label className="form-label" htmlFor="complemento">Complemento:</label>
            <input className="form-control" name="complemento" type="text" id="complemento" placeholder="Digite um complemento" required/>
        </div>

        <div className="col-12">
            <label className="form-label" htmlFor="cidade">Cidade:</label>
            <input className="form-control" name="cidade" type="text" id="cidade" placeholder="Digite a cidade" required/>
        </div>

        <div className="col-12">
            <label className="form-label" htmlFor="estado">Estado:</label>
            <input className="form-control" name="estado" type="text" id="estado" placeholder="Digite seu estado" required/>
        </div>

        <div className="col-12">
            <label className="form-label" htmlFor="cep">CEP:</label>
            <input className="form-control" name="cep" type="number" id="cep" placeholder="Digite seu CEP" required/>
        </div>

    </div>
}

export default Endereco;