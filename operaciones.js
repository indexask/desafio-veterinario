const fs = require('fs');

const cita = (nombre,edad,raza,color,enfermedad)=>{
    const historial = JSON.parse(fs.readFileSync('citas.json','utf-8'))
    historial.push({fecha: new Date().toLocaleDateString(),nombre: nombre ,edad:edad,raza:raza, color:color, enfermedad:enfermedad })
    fs.writeFileSync('citas.json',JSON.stringify(historial))
}

const historial = ()=>{
    console.log(`Mostrando las citas: `)
    const cita = JSON.parse(fs.readFileSync('citas.json', 'utf-8'))
    cita.forEach(element => {
       console.log(`Con fecha: ${element.fecha}, Nombre: ${element.nombre}, Edad: ${element.edad}, Raza: ${element.raza}, Color: ${element.color}, Enfermedad: ${element.enfermedad}`)
    });
}

module.exports = {historial, cita}