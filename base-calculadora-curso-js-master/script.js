
//esto agrega a la pantalla el valor que se le pase
function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}


//esto calcula el valor que se le pase
function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
}


//esto borra el valor que se le pase
function borrar() {
    document.getElementById('pantalla').value = '';
}
