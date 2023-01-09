
var input = document.querySelector("#texto-input")
var vazio = document.querySelector("#resultado-vazio")
var resultado = document.querySelector("#resultado")
var botao = document.querySelector("#botao-3")


document.getElementById('botao-1').addEventListener('click', function () {

    let check = document.getElementById('texto-input').value;
    if (check !== '') {

        document.getElementById('resultado-vazio').style.display = "none"

        let i = input.value.toLowerCase()
        let substituir = i.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat")
        return resultado.innerHTML = substituir

    } else {
        alert('Preencha o campo')
    }
})

document.getElementById('botao-2').addEventListener('click', function () {

    let check = document.getElementById('texto-input').value;
    if (check !== '') {
        document.getElementById('resultado-vazio').style.display = "none"


        let i = input.value.toLowerCase()
        let substituir = i.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u")
        return resultado.innerHTML = substituir
        
    } else {
        alert('Preencha o campo')
    }
})

document.getElementById('botao-3').addEventListener('click', function () {

    let check = document.getElementById('resultado').value;
    if (check !== '') {
        navigator.clipboard.writeText(resultado.innerHTML)
        alert("Mensagemn copiada!")

    } else {
        alert("Não há mensagem para copiar");
    }
})

