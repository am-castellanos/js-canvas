const CANVAS_ID = "canvas";

function dibujoUno() {

    // Fila 1
    rectangulo(20, 20, 50, 50, "#007BFF");
    rectangulo(71, 20, 50, 50, "#6c757d");
    rectangulo(122, 20, 50, 50, "#007BFF");
    rectangulo(173, 20, 50, 50, "#6c757d");
    rectangulo(224, 20, 50, 50, "#007BFF");

    // Fila 2
    rectangulo(20, 71, 50, 50, "#6c757d");
    rectangulo(71, 71, 50, 50, "#007BFF");
    rectangulo(122, 71, 50, 50, "#6c757d");
    rectangulo(173, 71, 50, 50, "#007BFF");
    rectangulo(224, 71, 50, 50, "#6c757d");
}

function dibujoDos() {

    circulo(70, 71, 50);
    circulo(224, 71, 50);
    circulo(147, 71, 25);
}

function rectangulo(x, y, ancho, alto, color) {

    let contexto = obtenerContexto();

    contexto.beginPath();
    contexto.fillStyle = asignarColorRelleno(color);
    contexto.fillRect(x, y, ancho, alto);
    contexto.stroke(); 
}

function circulo(x, y, radio) {

    let contexto = obtenerContexto();
    contexto.beginPath();
    contexto.arc(x, y, radio, 0, 2 * Math.PI);
    contexto.stroke(); 
}

function limpiar() {

    let canvas = document.getElementById(CANVAS_ID);

    let contexto = obtenerContexto();
    contexto.clearRect(0, 0, canvas.width, canvas.height);

}

function obtenerContexto() {
    
    let canvasElement = document.getElementById(CANVAS_ID);
    return canvasElement.getContext("2d");
}

function asignarColorRelleno(color) {

    if (undefined == color) {
        
        return "#CCC";
    }

    return color;   
}