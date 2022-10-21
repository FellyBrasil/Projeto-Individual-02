let selecione = window.document.querySelector(".select");
let radiobtn = window.document.querySelector("#opção");
let incremento = window.document.querySelector(".chave");
let btn = window.document.querySelector("button");
let codificar = window.document.querySelector("#codified");
let decodificar = window.document.querySelector("#decodified");

selecione.addEventListener("click", function () {
    if (selecione.value == "cifra") {
      incremento.style.display = "block";
    } else {
      incremento.style.display = "none";
    }
  });

  function base64() {
    var text = document.querySelector("#texto").value;
  
    if (codificar.checked) {
      let codificado = btoa(text);
      return codificado;
    } else if (decodificar.checked) {
      let decodificado = atob(text);
      return decodificado;
    }
  }
 
  radiobtn.addEventListener("click", function () {
    if (codificar.checked) {
      btn.innerText = "Codificar Mensagem!";
    } else  {
      if (decodificar.checked){
      btn.innerText = "Decodificar Mensagem!";}
    }
  });
  
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (selecione.value === "base64") {
      resultado.innerText = base64();
    } else if (selecione.value === "cifra") {
      resultado.innerText = cifraCesar();
    }
  });
  
  



 