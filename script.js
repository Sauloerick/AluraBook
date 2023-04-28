async function buscaEndereco(){
    try {
        var consultaCEP = await fetch('https://viacep.com.br/ws/01001250/json/');
        var consultaCEPConvert = await consultaCEP.json();
        if (consultaCEPConvert.erro) {
            throw Error('Este CEP não Existe!');
        }
        console.log(consultaCEPConvert);
    } catch (erro) {
        console.log(erro)
    }
}

buscaEndereco();