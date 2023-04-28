const cidade = document.getElementById('cidade');
const logradouro = document.getElementById('endereco');
const estado = document.getElementById('estado');
const bairro = document.getElementById('bairro');

async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvert = await consultaCEP.json();
        if (consultaCEPConvert.erro) {
            mensagemErro.innerHTML = `<p>Este CEP não Existe!</p>`
            limpaFormulario();
            throw Error('Este CEP não Existe!');
        }
        cidade.value = consultaCEPConvert.localidade;
        logradouro.value = consultaCEPConvert.logradouro;
        estado.value = consultaCEPConvert.uf;
        bairro.value = consultaCEPConvert.bairro;

        console.log(consultaCEPConvert);
        return consultaCEPConvert;
    } catch (erro) {
        if (erro.name == 'TypeError'){
            mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
            limpaFormulario();
            console.log('CEP inválido.\nCEP deve conter 8 dígitos!')
        }
    }
}

function limpaFormulario(){
    cidade.value = ("");
    logradouro.value = ("");
    estado.value = ("");
    bairro.value = ("");
}


var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
