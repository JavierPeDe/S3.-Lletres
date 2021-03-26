// //Exercici-1
console.log("Exercici-1");
let nom= "JAVIER";

for (let i=0; i< nom.length; i++){
    console.log(nom[i]);
}

//Exercici-2
console.log("Exercici-2");
nom = "JAVIER23P";
let vocales = "AEIOU";
let numeros = "0123456789";
//
console.log("Partim del nom " + nom);

for (let i = 0; i < nom.length; i++) {
    if (numeros.indexOf(nom[i]) != -1) {
        console.log("Els noms de persones no contenen el número:" + nom[i]);
    }
    else if (vocales.indexOf(nom[i]) != -1) {
        console.log("He trobat la VOCAL: " + nom[i]);
    }
    else {
        console.log("He trobat la CONSONANT: " + nom[i]);
    }
}

//Exercici-3
console.log("Exercici-3");
const lletres =  new Map();
let nom_1 = "JAVIERAE";
let contador = 0;
let intermedio = nom_1;
for (let i = 0; i < nom_1.length; i++) {
    for (let u = 0; u < intermedio.length; u++) {
        if (nom[i] == intermedio[u]) {
            contador += 1;
            intermedio[u] = '-';
        }

    }        
    if(contador>0){
        console.log(nom_1[i] + " " + contador); 
        lletres.set(nom_1[i], contador);
        contador = 0;
     }
}
console.log(lletres);

//Exercici 4
console.log("Exercici-4");
// //Creem els dos arrays
nom_array=['J','A','V','I','E', 'R'];
congnom_array=['P', 'E', 'R', 'E', 'Z'];
fullname= nom_array.concat(' ', congnom_array);
console.log(fullname);