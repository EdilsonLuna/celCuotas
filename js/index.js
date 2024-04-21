const inputTexto = document.getElementsByName('campoInput');
let texto = "Resultados para la búsqueda: ";

function filterCelphones(){
    if(inputTexto[0].value == ""){
        alert("Debe ingresar un modelo a buscar")
        return;
    }else[
        texto += inputTexto[0].value
    ]
    
    localStorage.setItem("h1text",texto);
    window.location.href = "../html/busqueda.html";
}

function more(){
    window.location.href = "../html/more.html";
}

function setColor(color) {
    document.getElementById('color').value = color;
  }

