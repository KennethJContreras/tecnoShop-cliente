document.getElementById('ejemplo').style.display = "none";
document.getElementById('productos').style.display = "none";

function irCategoria(){
    document.getElementById('ejemplo').style.display = "block";
    document.getElementById('productos').style.display = "block";
    document.getElementById('productos').style.display = "flex";
    document.getElementById('contenido-1').style.display = "none";
}
function regresarCategorias(){
    document.getElementById('ejemplo').style.display = "none";
    document.getElementById('productos').style.display= "none";
    document.getElementById('contenido-1').style.display = "block";
}