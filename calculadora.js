var ganhoMes = document.querySelector("#ganho-mes")
var horasDias = document.querySelector("#horas-dia")
var diasMes = document.querySelector("#dias-mes")
var resposta = document.querySelector("#resposta")

function calcularValorHora() {
    var valorHora = (ganhoMes.valueAsNumber / diasMes.valueAsNumber)/horasDias.valueAsNumber
    resposta.textContent = valorHora
}