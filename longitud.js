console.log("desde js");

// seleccino los elementos vinculados al HTML para procesar

const boton = document.getElementById('boton');

const milimetros = document.getElementById('milimetros');
const centimetros = document.getElementById('centimetros');
const decimetros = document.getElementById('decimetros');
const decametros = document.getElementById('decametros');
const hectometros = document.getElementById('hectometros');
const kilometros = document.getElementById('kilometros');






// Evento clic

boton.addEventListener('click', metros);



// Funcion 

function metros() {

    let metros = document.getElementById('metros').value;
    metros = parseInt(metros);


    // instrucciones

    milimetros.textContent=metros*1000
    centimetros.textContent=metros*100
    decimetros.textContent=metros*10
    decametros.textContent=metros/10
    hectometros.textContent=metros/100
    kilometros.textContent=metros/1000


}
