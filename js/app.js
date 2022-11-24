//1.Vamos a cargar los autos, en el DIV resultado
//2. Agregar los años al select de año, esto cuando cargue el documento
//3. Cuando selecciones por ejemplo la marca guardarla en algún lugar

//Variables
const resultado = document.querySelector('#resultado');

const year = document.querySelector('#year');
const maximo = new Date().getFullYear();
const minimo = maximo - 10;
const min = document.querySelector('#minimo');
const max = document.querySelector('#maximo');

//crear el objeto para guardar los datos de filtrado
const datosbusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    precioMax: '',
    precioMin: '',
    puertas: '',
    transmision: '',
    color: ''
};
//Eventos
document.addEventListener('DOMContentLoaded', () => {
    MostrarAutos(autos);
    AgregarAñosSelect();
});
//eventos de los select
marca.addEventListener('change', e => {
    datosbusqueda.marca = e.target.value;
    filtrarAuto();
});
year.addEventListener('change', e => {
    datosbusqueda.year = e.target.value;
    filtrarAuto();
});
min.addEventListener('change', e => {
    datosbusqueda.precioMin = e.target.value;
    filtrarAuto();
});
max.addEventListener('change', e => {
    datosbusqueda.precioMax = e.target.value;
    filtrarAuto();
});
puertas.addEventListener('change', e => {
    datosbusqueda.puertas = e.target.value;
    filtrarAuto();
})
transmision.addEventListener('change', e => {
    datosbusqueda.transmision = e.target.value;
    filtrarAuto();
})
color.addEventListener('change', e => {
    datosbusqueda.color = e.target.value;
    filtrarAuto();
})
//Funciones
//funcion para mostrar los autos
function MostrarAutos(autos) {
    limpiarHTML();
    autos.forEach(autos => {
        const { marca, modelo, year, precio, puertas, color, transmision } = autos;
        //crear un parrafo
        
        const autoHTML = document.createElement('p');
        autoHTML.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} Puertas - Transmision: ${transmision} -
            ${color} - $${precio}
        `;
        // Agregar al div resultado
        resultado.appendChild(autoHTML);
    })
}

// funcion agregar opciones de año al select de años
function AgregarAñosSelect() {
    for (let i = maximo; i >= minimo; i--) {
        //crear el option
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        // agregarla al select año
        year.appendChild(opcion);

    }
}
function limpiarHTML() {
    while (resultado.lastElementChild) {
        resultado.removeChild(resultado.lastElementChild);
    }
}
function filtrarAuto() {
    const resultado = autos.filter(marcaFiltro).filter(yearFiltro).filter(minPrecio).filter(maxPrecio).filter(puertaFiltro).filter(transmisionFiltro).filter(colorFilto);
    MostrarAutos(resultado);
}

//funcion que filtre por marca
function marcaFiltro(autos) {
    const { marca } = datosbusqueda;
    if (marca) {
        return autos.marca === marca;
    }
    return autos;
}
//funcion que filtre por año
function yearFiltro(auto) {
    const { year } = datosbusqueda;
    if (year) {
        return auto.year === parseInt(year);
    }
    return auto;
}
// funcion que filtre por precio

//min
function minPrecio(auto) {
    const {precioMin} = datosbusqueda;
    if (precioMin) {
        return auto.precio === parseInt(precioMin)
    }
    return auto
}
function maxPrecio(auto) {
    const {precioMax} = datosbusqueda;
    if (precioMax) {
        return auto.precio === parseInt(precioMax)
    }
    return auto
}

//funcion de puertas filtro
function puertaFiltro(autos) {
    const {puertas} = datosbusqueda;
    if(puertas){
        return autos.puertas === parseInt(puertas);
    }
    return autos;
}

//funcion de transmision filtro
function transmisionFiltro(auto) {
    const{transmision} = datosbusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto;
}

//funcion de color filtro
function colorFilto(auto){
    const {color} = datosbusqueda;
    if(color){
        return auto.color === color;
    }
    return auto;
}