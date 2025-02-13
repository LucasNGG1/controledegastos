let gastos = [];
let totalGastos = 0;


document.getElementById("btn-adicionar").addEventListener("click", function(event) {
 event.preventDefault();
 let descricao = document.getElementById("descricao").value;
 let valor = parseFloat(document.getElementById("valor").value);
 if (descricao && valor) {
 gastos.push({ descricao, valor });
 totalGastos += valor;
 atualizarListaGastos();
 atualizarTotalGastos();
 document.getElementById("descricao").value = "";
 document.getElementById("valor").value = "";
 }
});

document.getElementById("btn-desfazer").addEventListener("click", function(event) {
    event.preventDefault();
    if (gastos.length > 0) {
    let ultimoGasto = gastos.pop();
    totalGastos -= ultimoGasto.valor;
    atualizarListaGastos();
    atualizarTotalGastos();
    } else {
    alert("Não há lançamentos para desfazer!");
    }
   });

document.getElementById("btn-limpar").addEventListener("click", function(event) {
    event.preventDefault();
    gastos = [];
    totalGastos = 0;
    atualizarListaGastos();
    atualizarTotalGastos();
    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
   });

function atualizarListaGastos() {
 let listaGastos = document.getElementById("lista-gastos");
 listaGastos.innerHTML = "";
 gastos.forEach(function(gasto, index) {
 let li = document.createElement("li");
 li.textContent = `${gasto.descricao}: R$ ${gasto.valor.toFixed(2)}`;
 listaGastos.appendChild(li);
 });
}

function atualizarTotalGastos() {
 document.getElementById("total-gastos").textContent = `Total: R$ ${totalGastos.toFixed(2)}`;
}