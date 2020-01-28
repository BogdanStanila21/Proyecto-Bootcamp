//cambios rama2

var coche1 = {"color":"rojo","arranca":true,"vel.max":200,"interior":["cuero","negro","iluminado","confortable"],
"motor":{"capacidad":2000,"cambio":"automatico"}};

var coche2 = {"color":"negro","arranca":true,"vel.max":180,"interior":["tapiceria","marron","iluminado","confortable"],
"motor":{"capacidad":2000,"cambio":"automatico"}};

var coche3 = {"color":"verde","arranca":false,"vel.max":250,"interior":["tapiceria","negro","oscuro","incommodo"],
"motor":{"capacidad":2000,"cambio":"automatico"}};


var caravana = [coche1,coche2,coche3];

document.write(coche1.interior);
document.write(caravana);
