import './styles.css';
import {Calcular} from './classes/valor.class'
// Identificadores
const selectPrincipal = document.querySelector('#unidadesP');
const selectSecundario = document.querySelector('#unidadesS');
const valorInput = document.querySelector('#input');
const btn = document.querySelector('#btn');
const info = document.querySelector('.info');
const p_res = document.querySelector('.res');


// Unidades!


// Funcion para obtener el dato ingresado en el input!
const obtenerDato = ()=> valorInput.value;
// fUnction para obtener dato Principal y Secundario
const obtenerDatoPrincipal = () => selectPrincipal.value;
const obtenerDatoSecundario = () => selectSecundario.value;

let dato1 = 'libras',
    dato2;
// Eventos
valorInput.addEventListener('blur', obtenerDato);
btn.addEventListener('click', proceso)
// Eventos Unidades
selectPrincipal.addEventListener('click', ()=>{
    dato1 = obtenerDatoPrincipal();
    // console.log('El dato1 es: ',dato1);
});
selectSecundario.addEventListener('click', () =>{
    dato2 = obtenerDatoSecundario();
    // console.log('El dato2 es: ',dato2);
});

let cal = new Calcular();

function proceso(){
//    librasKilos(convertirNumber());
    console.clear();
    let numero = cal.convertir(obtenerDato());
    console.log('Numero convertido!: ',numero);
    let resultadoFinal;
    
    // Libras!!!!
    if(dato1 === 'libras' && dato2 === 'kilos'){
        console.log('Resultado de libras a kilos:',cal.librasAkilos(numero));
        resultadoFinal = cal.librasAkilos(numero);
        console.log(resultadoFinal);
    } else if (dato1 === 'libras' && dato2 === 'gramos'){
        console.log('Resultado de libras a gramos:',cal.librasAGramos(numero));
        resultadoFinal = cal.librasAGramos(numero)
    } else if (dato1 === 'libras' && dato2 === 'libras'){
        alert('No puedes convertir una unidad a la misma unidad, por favor selecciona diferentes unidades..');
    } //Kiloss!!!!!
     else if (dato1 === 'kilos' && dato2 === 'libras'){
        console.log('Resultado de kilos a Libras: ', cal.kilosAlibras(numero));
        resultadoFinal = cal.kilosAlibras(numero);
    } else if (dato1 === 'kilos' && dato2 === 'gramos'){
        console.log('Resultado de kilos a gramos: ', cal.kilosAGramos(numero));
        resultadoFinal = cal.kilosAGramos(numero);
    } else if (dato1 === 'kilos' && dato2 === 'kilos'){
        alert('No puedes convertir una unidad a la misma unidad, por favor selecciona diferentes unidades..');
    } //GRAMOS!!!
    else if (dato1 === 'gramos' && dato2 === 'libras'){
        console.log('Resultado de kilos a gramos a libras: ', cal.gramosALibras(numero));
        resultadoFinal = cal.gramosALibras(numero);
    } else if (dato1 === 'gramos' && dato2 === 'kilos'){
        console.log('Resultado de kilos a gramos a kilos: ', cal.gramosAkilos(numero));
        resultadoFinal = cal.gramosAkilos(numero);
    } else if (dato1 === 'gramos' && dato2 === 'gramos'){
        alert('No puedes convertir una unidad a la misma unidad, por favor selecciona diferentes unidades..');
    }


    const htmlPrint = `<span>${dato2? numero : 0 }</span> ${dato1} = <span>${resultadoFinal? resultadoFinal : 0}</span> ${dato2? dato2 : 'error'}`
    if(numero === 0){
        const parrafo = document.createElement('p');
        parrafo.innerHTML = htmlPrint;
        info.appendChild(parrafo)
        
        // if(info.children.length > 1 || p_res){
                borrar();
        // }
    }else{
        
        const parrafo = document.createElement('p');
        parrafo.setAttribute('class', 'res');
        parrafo.innerHTML = htmlPrint;
        info.appendChild(parrafo);
        // if(info.children.length > 1 || p_res){
            borrar();
        // }
    }
    setInterval(function(){
        
    },2000)

}
function borrar(){
    if(info.children.length > 1 || p_res){
        info.removeChild(info.children[0]);
    }
    return info;
}





