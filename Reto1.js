//creando una rama
/* realizar un cifrado de texto*/
//cambio rama principal


function cifrado (text){
    for (let i = 0;i<text.length;i++ ){
        console.log(text.charCodeAt(i));

    }

}
cifrado("Codenotch and Javascript are awesome")


cifradoASCII = (entrada= "No has introducido ningun texto")=>{
    let ASCII = "";
    for (let i = 0;i<entrada.length;i++){
        ASCII += entrada.charCodeAt(i)+",";
    }
    console.log(ASCII);
}

cifradoASCII("Hola")