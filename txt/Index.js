
//lectura de un archivo

var fs = require('fs');

try {
    var data = fs.readFileSync('textouno.txt', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
}

//creacion de un archivo y llenado de el mismo 

fs.writeFile("evidencia.txt", "Universidad Gerardo Barrios\nProgramacion IV\nciclo V", function(err) {
  if (err) {
    return console.log(err);
  }

  console.log("El archivo fue creado correctamente");
});


