function Agradecimento() {
    return(
        <div className="col-12">
            <div>
                <p>Agradecemos por se cadastrar!</p>
            </div>

            <div className="col-12">
                <h3>Agora nos diga: Onde nos conheceu? </h3>
                <div className="col-12">
               

                    <select class="form-select" aria-label="Default select example">
                        <option selected>Selecione</option>
                        <option value="site">Pelo site</option>
                        <option value="linkedin">Pelo LinkedIn</option>
                        <option value="intagram">Pelo Instagram</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Agradecimento;