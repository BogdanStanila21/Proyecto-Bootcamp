/* Crear una clase "Password"con dos atributos y unos metodos*/
//Linea de prueba
//Otra linea de comentario
//Cambios rama 1
class Password {
    constructor(password,length = 8){
        this.length = length;
        this.password = password;
    }

    isStrong(){
        let cont = 0;
        for (let i = 0;i<this.password.length; i++){
            //console.log(this.password.charAt(i))
            var caracter = this.password.charAt(i)
            if (isNaN(caracter)){
                cont +=1;
                //si es tipo string en minuscula
                if (caracter === caracter.toUpperCase()){
                    cont +=4;
                    //si es mayuscula
                }
                
            }
            else{
                cont+=3;
                //si es numero
            }   
        }
        if (this.password.length >=8){
            cont +=2;
        }
        if (this.password.length >=12){
            cont +=5;
        }
        return cont>25;
    }
    
    generatePass(){
        var pass = String();
        for (let  i = 0;i<this.length;i++){
            pass += String.fromCharCode(48+(Math.floor(Math.random()*74)))
        }return pass;



    }
    get Pass(){
        return this.generatePass();
    }
    get Strong(){
        return this.isStrong();
    }

}

var contraseña = new Password("Hasdsss21sdf")
console.log(contraseña.generatePass())
console.log(contraseña.isStrong())
