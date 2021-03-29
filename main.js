// //Exercici-1
function exer1() {
    let nom = "JAVIER";
    let resp = "";
    console.log("Exercici-1");
    resp += "Exercici-1 <br>"
    for (let i = 0; i < nom.length; i++) {
        console.log(nom[i]);
        resp += nom[i] + "<br>";
    }
    mostrar(resp);
}
//Exercici-2
function exer2() {
    console.log("Exercici-2");
    let resp = "Exercici-2 <br>"
    nom = "JAVIER23P";
    let vocales = "AEIOU";
    let numeros = "0123456789";
    //
    console.log("Partim del nom " + nom);

    for (let i = 0; i < nom.length; i++) {
        if (numeros.indexOf(nom[i]) != -1) {
            console.log("Els noms de persones no contenen el número:" + nom[i]);
            resp += "Els noms de persones no contenen el número:" + nom[i] + "<br>";
        }
        else if (vocales.indexOf(nom[i]) != -1) {
            console.log("He trobat la VOCAL: " + nom[i]);
            resp += "He trobat la VOCAL: " + nom[i] + "<br>"
        }
        else {
            console.log("He trobat la CONSONANT: " + nom[i]);
            resp += "He trobat la CONSONANT: " + nom[i] + "<br>";
        }
    }
    mostrar(resp);
}
//Exercici-3
function exer3() {
    console.log("Exercici-3");
    let resp = "Exercici 3 <br>"
    const lletres = new Map();
    let nom_1 = "JAVIERAE";
    let contador = 0;
    let intermedio = nom_1;
    for (let i = 0; i < nom_1.length; i++) {
        for (let u = 0; u < intermedio.length; u++) {
            if (nom_1[i] == intermedio[u]) {
                contador += 1;
                intermedio[u] = '-';
            }
        }
        if (contador > 0) {
            console.log(nom_1[i] + " " + contador);
            lletres.set(nom_1[i], contador);
            contador = 0;
        }
    }
    console.log(lletres);
    resp += Array.from(lletres).join("<br>");
    mostrar(resp);
}
//Exercici 4
function exer4() {
    console.log("Exercici-4");

    nom_array = ['J', 'A', 'V', 'I', 'E', 'R'];
    congnom_array = ['P', 'E', 'R', 'E', 'Z'];
    fullname = nom_array.concat(' ', congnom_array);
    console.log(fullname);
    mostrar(fullname);
}
//Nivel -2 
function nivel2() {
    var str_1 = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

    console.log(correus(str_1))
    document.getElementById("n2").innerHTML = correus(str_1);
}
function correus(str) {
    const er = /[a-zA-z0-9._-]+\@\S+\.[a-zA-z0-9._-]+/g; //todos los caracteres permitidos + @ + todo menos espacio + . + caracteres permitidos 
    var correos = str.match(er);

    for (i = correos.length - 1; i >= 0; i--) {  //he considerado que .es y .ES es diferente. 
        if (correos.indexOf(correos[i]) !== i) {
            correos.splice(i, 1);
        }
    }
    return correos.join("<br>");
}
function mostrar(resp) {
    document.getElementById("resp-1").innerHTML = resp;
}