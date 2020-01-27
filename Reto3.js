class MatrizCuadrada{
    constructor(longitudMatriz){
        this.longitudMatriz = longitudMatriz;
        this.Matriz = this.construir(this.longitudMatriz);

    }
    sumarMatriz(aray){
        var suma;
        if (this.Matriz.length != aray.Matriz.length){
            suma = "Matrices con diferentes longitudes"
        }else{
            suma = []
            for(let i = 0 ; i < this.Matriz.length ; i++){
                suma[i]=new Array();
                //console.log("Jsoa")
                for (let j = 0; j < this.Matriz.length ; j++){
                    suma[i][j]=aray.Matriz[i][j]+this.Matriz[i][j];
                }
            }
        
        }return suma;      
    }

    construir(longitudMatriz){
        //console.log(typeof(longitudMatriz))
        let matriz = []
        for(let i = 0 ; i < longitudMatriz ; i++){
            matriz[i]=new Array()
            for (let j = 0; j < longitudMatriz ; j++){
                matriz[i].push(Math.round(Math.random()*20))
            }
        }return matriz;
    }
    contiene10(){
        let tiene = false;
        for(let i = 0 ; i < this.Matriz.length ; i++){
            for (let j = 0; j < this.Matriz.length ; j++){
                //console.log(mat1[j])
                    if (this.Matriz[i][j]===10){
                        tiene = true;
                }
                    
            }
        }
        return tiene;
    }
    contineMatriz10(){
        let i = 0;
        let j = 0;
        let verdad = false
        while(i<this.Matriz.length && verdad == false){
            console.log ("hola")
            while(j<this.Matriz.length && verdad == false){
                console.log("Hola")
                if (this.Matriz[i][j] === 10){
                    console.log(this.Matriz[i][j])
                    verdad = true;
                    console.log(verdad)
                }console.log(verdad)
            j++
            }
        i++    
        }return verdad;

    }
    /*monstrarMatriz(){
        let escribir = [];
        for(let i = 0 ; i < this.Matriz.length ; i++){
           escribir = escribir + this.Matriz[i]+"<br>"
        }
        document.write(escribir)
    }*/
}
var Matriz1 = new MatrizCuadrada(4);
var Matriz2 = new MatrizCuadrada(3);
console.log(Matriz1)
console.log(Matriz2)


console.log(Matriz1.sumarMatriz(Matriz2))
console.log(Matriz1.contiene10())
console.log(Matriz1.contineMatriz10())















function suma(object,object2){
    let suma = [];
    for(let i = 0 ; i < object.length ; i++){
        suma[i]=new Array()
        for (let j = 0; j < object.length ; j++){
            suma[i][j]=object[i][j]+object2[i][j]
        }
    }return suma
}

//console.log(construir(4))