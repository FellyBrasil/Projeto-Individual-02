let selecione = window.document.querySelector(".select");
let radiobtn = window.document.querySelector("#opção");
let incremento = window.document.querySelector(".chave");
let btn = window.document.querySelector("button");
let codificar = window.document.querySelector("#codified");
let decodificar = window.document.querySelector("#decodified");
let text = document.getElementById("#texto")



selecione.addEventListener("click", function () {
  if (selecione.value == "cifra") {
    incremento.style.display = "block";
  } else {
    incremento.style.display = "none";
  }
}); //evento simples para a modificação da chave de escolha.

function base64() {
  let text_novo = document.querySelector("#texto").value;

  if (codificar.checked) {
    let codificado = btoa(text_novo);
    return codificado;
  } else if (decodificar.checked) {
    let decodificado = atob(text_novo);
    return decodificado;
  }
}  //configuração  da base64 quando adicionado a mensagem.


function crifra_de_cesar() {
  let text_novo = document.querySelector("#texto").value;
  let numero = document.getElementById("rangenumber").value;
  if (codificar.checked) {
    let codificado = caesar(text_novo, numero);
    return codificado;
  } else if (decodificar.checked) {
    let decodificado = caesar(text_novo, (numero-(numero*2)));
    return decodificado;
  }
} //configuração  do cifra de cesar quando adicionado a mensagem.


radiobtn.addEventListener("click", function () {
  if (codificar.checked) {
    btn.innerText = "Codificar Mensagem!";
  } else {
    if (decodificar.checked) {
      btn.innerText = "Decodificar Mensagem!";
    }
  }
});

btn.addEventListener("click", function (event) {
  event.preventDefault();
  if (selecione.value === "base64") {
    resultado.innerText = base64();
  } else if (selecione.value === "cifra") {
    resultado.innerText = crifra_de_cesar();
  }
});

// Script para processar em CIFRA DE CÉSAR //
const caesar = function (word, num) {
  let solved = ""
  num = (num % 26 + 26) % 26;
  for (let i = 0; i < word.length; i++) {
    let ascii = word[i].charCodeAt();
    if ((ascii >= 65 && ascii <= 90)) {
      solved += String.fromCharCode((ascii - 'A'.charCodeAt(0) + num) % 26
        + 'A'.charCodeAt(0));
    } else if (ascii >= 97 && ascii <= 122) {
      solved += String.fromCharCode((ascii - 'a'.charCodeAt(0) + num) % 26
        + 'a'.charCodeAt(0));
    } else {
      solved += word[i]
    }
  }
  return solved;


} //parte de cifra de cesar quando adicionado a mensagem.
let resposta = (caesar(text, incremento))






