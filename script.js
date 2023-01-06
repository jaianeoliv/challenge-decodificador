
var input = document.querySelector("#texto-input")
var vazio = document.querySelector("#resultado-vazio")
var resultado = document.querySelector("#resultado")




function criptografar(){
   document.getElementById('resultado-vazio').style.display = "none" 
   
   
   let i = input.value.toLowerCase()

   let substituir = i.replaceAll("e","enter").replaceAll("i", "imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat")

   return resultado.innerHTML = substituir
   
}

function descriptografar(){

    document.getElementById('resultado-vazio').style.display = "none"

    let i = input.value.toLowerCase()

    let substituir = i.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u")
    return resultado.innerHTML = substituir
}


function copiar(){
    
    navigator.clipboard.writeText(resultado.innerHTML).then(()=> {alert("Mensagemn copiada!")}).catch(() => {
        alert("Falhou em copiar mensagem!");
      });
    
}



function clearContent(){
    document.getElementById("texto-input").value='';
    document.getElementById("resultado").value='';
    document.getElementById('resultado-vazio').style.display = "flex"
}