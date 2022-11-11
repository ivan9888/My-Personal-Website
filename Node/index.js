
//ejercicio 1
// const copiar=require("copiar");
// copiar.copyFileSync("file1.txt", "archivoCopia.txt");

//ejercicio2
// const fs=require("fs");
// fs.readFile("file1.txt", (err, data) => {
//     console.log('Script de archivo: '+ data);
// });

const fs=require("fs");
fs.writeFile('helloworld.txt', 'Hello world!', function (err) {
    if (err) throw err;
    else{
        console.log('Hello world!');
    }
  });