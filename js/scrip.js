
let suma = 10 + 5; // 15
let producto = 20 * 2; // 40
console.log(producto);
console.log(suma);

// CONSTANTES


const nombre = "Matias";
const apellido = "fernandez";

console.log(`mi nombre es ${nombre} y mi apellido ${apellido}`)

const dolarMep = 1200;
const dolarOficial = 1150;
const dolarBlue = 1250;
const sueldo = 2000000;

console.log(`juan cobra $${sueldo / dolarMep} dolares mep.`);


//CONDICIONALES

if (dolarMep > dolarOficial){
    console.log("El dolar oficial esta mas barato que el mep");
}else if (dolarMep = dolarOficial){
    console.log("estan al mismo precio");
}else{
    console.log("el dolar oficial es mas caro que el mep");
}

//  AND Y OR

if (dolarBlue < dolarMep && dolarBlue < dolarOficial){
    console.log("BAJO EL DOLAR BLUE");
}else{
    console.log
        ("NO BAJO EL BLUE");
}

//CICLO FOR

//for(let i = 0; i < 5; i++){
  //  console.log("hola mundo");
//}
