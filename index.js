const {historial ,cita} = require("./operaciones")
const argumentos = process.argv.slice(2);
const operacion = argumentos[0]
const nombre = argumentos[1]
const edad = argumentos[2]
const raza =argumentos[3]
const color = argumentos[4]
const enfermedad = argumentos[5]



if(operacion=="registrar"){
    cita(nombre,edad,raza,color,enfermedad)
}else if(operacion=="leer"){
    historial()
}
