export const pesquisarCep = async (cepPesquisado) => {
    const url = `https://api.postmon.com.br/v1/cep/${cepPesquisado}`
    const response = await fetch(url)
    const data = await response.json()
    return {
        logradouro: data.logradouro,
        bairro: data.bairro,
        municipio: data.cidade,
        estado: data.estado
    }
}