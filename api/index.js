//traer la DB
const db = require('../models');

//SELECT * FROM libro = "findAll()"
//Esto es una funcion anonima de tipo arrow function guardada en una variable llamada getBooks.. por lo tanto es una función llamada getBooks
const getBooks = async() =>{
    //llamo a la DB
    const books = await db.libro.findAll({
        include: db.autor
    }).then(result => {
        return result;
    });

    return books;
}

//Exportamos las funciones
module.exports = {
    getBooks
}