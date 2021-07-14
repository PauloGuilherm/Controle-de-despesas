var saidaDados = "";
var nomeTran = "";
var valorReceita = 0;
var valorDespesa = 0;
var saldoAtual = 0;
var valorAtual = 0;
var valorTranReceita = 0;
var valorTranDespesa = 0;

$("#adicionar").click(function () {
  saidaDados = document.getElementById("saidaTran");
  nomeTran = document.getElementById("nome").value;
  valorTranReceita = document.getElementById("valor").value;
  valorTranDespesa = document.getElementById("valor").value;
  saldoAtual = document.getElementById("saldoAtual");
  if (valorTranReceita > 0) {
      saidaDados.innerHTML += `     <label></label>
                                    <div onclick="excluir(this)">
                                    <div id="tranReceita" >
                                    <button type="button"class="btn btn-danger">x</button>
                                 <label>${nomeTran}</label>
                                 <div value="${valorTranReceita}" name="valorTran">R$ ${valorTranReceita}</div>
                                 </div>
                                 </div>`;
      valorReceita += parseFloat(valorTranReceita);
      $("#saidaReceitas").html(`R$ ${valorReceita}`);
    }
   else if (valorTranDespesa < 0) {
    saidaDados.innerHTML += ` <label></label>
                              <div onclick="excluir(this)" >                          
                              <div id="transDespesa" >
                              <button type="button" class="btn btn-danger">x</button> 
                             <label>${nomeTran}</label>
                             <div value="${valorTranDespesa}" name="valorTran">R$ ${valorTranDespesa}</div>
                             </div>
                              </div>`;
     valorDespesa -= parseFloat(valorTranDespesa);
     $("#saidaDespesas").html(`R$ ${valorDespesa}`);
  }
    valorAtual = valorReceita - valorDespesa;
    $("#saldoAtual").html(`R$ ${valorAtual}`);
    $("#nome").val("");
    $("#valor").val("");
});

function excluir(element){
  let recebDados = $(element).children().children("div").attr("value");

  if(recebDados > 0){
    valorAtual -= Math.abs($(element).children().children("div").attr("value"));
    // console.log(valorAtual)
    valorReceita -= Math.abs($(element).children().children("div").attr("value"));
  }
  else if(recebDados < 0){
    valorAtual += Math.abs($(element).children().children("div").attr("value"));
    // console.log(valorAtual+"oi")
    valorDespesa -= Math.abs($(element).children().children("div").attr("value"));
  }
  element.innerHTML = ""
  $("#saldoAtual").html(`R$ ${valorAtual}`);
  $("#saidaReceitas").html(`R$ ${valorReceita}`);
  $("#saidaDespesas").html(`R$ ${valorDespesa}`);
}
