window.addEventListener("beforeprint", (event) => {
  // Parte Relacionada as informações do cliente
  let nomeCliente = document.getElementById("nomeCliente").value;
  let cpf = document.getElementById("cpf").value;
  let rg = document.getElementById("rg").value;

  let endereco = document.getElementById("endereco").value;
  let numero = document.getElementById("numero").value;
  let bairro = document.getElementById("bairro").value;
  let cep = document.getElementById("cep").value;
  let cidade = document.getElementById("cidade").value;

  let telefone = document.getElementById("telefone").value;

  console.log("Nome do Cliente", nomeCliente);
  document.getElementById(
    "firstInfoCliente"
  ).innerHTML = `<span> Nome: ${nomeCliente} &nbsp; CPF: ${cpf} &nbsp; RG: ${rg}</span>`;
  document.getElementById(
    "secondInfoCliente"
  ).innerHTML = `<span> Endereço: ${endereco} &nbsp; N.º: ${numero} &nbsp; Bairro: ${bairro} &nbsp; Cep: ${cep} &nbsp; Cidade: ${cidade}</span>`;
  document.getElementById(
    "thirdInfoCliente"
  ).innerHTML = `<span> Telefone: ${telefone}</span>`;
  console.log("Before print");

  // Parte Relacionada as informações do produto
  let produto = document.getElementById("produto").value;
  let gb = document.getElementById("gb").value;
  let cor = document.getElementById("cor").value;

  let ime1 = document.getElementById("ime1").value;
  let imei2 = document.getElementById("imei2").value;

  let valor = document.getElementById("valor").value;

  let formaPagamento = document.getElementById("formaPagamento").value;
  let valorFormaPagamento = document.getElementById(
    "valorFormaPagamento"
  ).value;

  let dataCompra = document.getElementById("dataCompra").value;
  dataCompra = formatarData(dataCompra)

  console.log("Nome do Cliente", nomeCliente);
  document.getElementById(
    "firstInfoProduct"
  ).innerHTML = `<span> Produto: ${produto} &nbsp; GB: ${gb} &nbsp; Cor: ${cor}</span>`;
  document.getElementById(
    "secondInfoProduct"
  ).innerHTML = `<span> IMEI 1: ${ime1} &nbsp; IMEI 2: ${imei2}</span>`;
  document.getElementById(
    "thirdInfoProduct"
  ).innerHTML = `<span> Valor do Produto R$: ${valor}</span>`;
  document.getElementById(
    "fourthInfoProduct"
  ).innerHTML = `<span> Forma de Pagamento: ${formaPagamento} &nbsp; R$: ${valorFormaPagamento}</span>`;
  document.getElementById(
    "sixthInfoProduct"
  ).innerHTML = `<span> Data da Compra: ${dataCompra}</span>`;
  console.log("Before print");
});

window.addEventListener('afterprint', (event) => {
    location.href = location.href;
    console.log('After print');
  });

function formatarValor() {
    var elemento = document.getElementById('valor');
    var valor = elemento.value;
    

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
    
}

function formatarValorPagemanto() {
    var elemento = document.getElementById('valorFormaPagamento');
    var valor = elemento.value;
    

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
    
}

function formatarData(data){
    var split = data.split('-');
    data_formatada = split[2] + "/" + split[1] + "/" + split[0];
    return data_formatada;
 }
