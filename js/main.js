'use strict';

const listaSpesa = ['acqua', 'pane', 'pasta', 'carote', 'uova'];

const ul = document.getElementById('listaspesa');

// modalità ciclo for
// for(let i = 0; i < listaSpesa.length; i++){
//     const listItem = document.createElement('li');
//     listItem.append(listaSpesa[i]);
//     ul.append(listItem);
// }

// modalità ciclo while

let i = 0;

while(i < listaSpesa.length){
    const listItem = document.createElement('li');
    listItem.append(listaSpesa[i]);
    ul.append(listItem);

    i++
}