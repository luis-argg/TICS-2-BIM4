const titulo = document.getElementById('titulo');
const parrafo = document.getElementById('parrafo');
const boton = document.getElementById('boton');
const extra = document.querySelector('.extra');
const imagen = document.getElementById('imagen');
const reiniciar = document.getElementById('reiniciar');

const textoInicialParrafo = parrafo.textContent;
const textoInicialExtra = extra.textContent;
const srcImagenInicial = imagen.src;
const srcImagenGif = 'https://media1.tenor.com/m/JxH03vCBQLwAAAAd/rei-chiquita-rei-dance.gif';

let colorAlterno = false;

function reiniciarTodo() {
    colorAlterno = false;
    titulo.style.color = '#AD280E';
    parrafo.textContent = textoInicialParrafo;
    extra.textContent = textoInicialExtra;
    imagen.src = srcImagenInicial;
}

boton.addEventListener('click', function () {
    if (colorAlterno) {
        titulo.style.color = '#333333';
        parrafo.textContent = 'Soy un parrafo, haz click para cambiarme ';
        extra.textContent = 'Este párrafo extra se atrapa con querySelector.';
    } else {
        titulo.style.color = '#d32f2f';
        parrafo.textContent = 'Hola ahora soy un texto malvado y tal :0 ' + boton.textContent;
        extra.textContent = 'Ahora este texto es distinto por el querySelector ';
    }
    colorAlterno = !colorAlterno;

    alert('Este boton es para que se activen los eventos ');
});

titulo.addEventListener('click', function () {
    const colores = ['#d32f2f', '#1976d2', '#388e3c', '#7b1fa2', '#e8a13a', '#00bcd4', '#ff9800', '#8bc34a', '#e91e63', '#3f51b5', '#00e676', '#ffeb3b', '#ff5722'];
    const indice = Math.floor(Math.random() * colores.length);
    titulo.style.color = colores[indice];
    alert('Ahora el color del titulo es distinto tambien Bv  ');
});

parrafo.addEventListener('dblclick', function () {
    parrafo.textContent = 'Has cambiado el parrafo con doble cliick ';
});

imagen.addEventListener('click', function () {
    imagen.src = srcImagenGif;
});

reiniciar.addEventListener('click', function () {
    reiniciarTodo();
    alert('Eventos reiniciados y la imagen volvio a la normalidad ');
});