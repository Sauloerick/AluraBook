async function buscaEndereco(cep){
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvert = await consultaCEP.json();
        if (consultaCEPConvert.erro) {
            throw Error('Este CEP não Existe!');
        }
        console.log(consultaCEPConvert);
        return consultaCEPConvert;
    } catch (erro) {
        if (erro.name == 'TypeError'){
            console.log('CEP inválido.\nCEP deve conter 8 dígitos!')
        } else{
            console.log(erro);
        }
    }
}
