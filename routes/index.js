var express = require('express');
var router = express.Router();

//Traigo TODAS las funciones de la API
const api = require('../api');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Nosotros page. */
router.get('/nosotros',(req, res) => {
  res.render('pages/nosotros', { title: 'Nosotros' });
});

/* GET Contacto page. */
router.get('/contacto',(req, res) => {
  res.render('pages/contacto', { title: 'Contacto' });
});

//localhost:3000/libros
router.get('/libros', async (req, res) =>{
  //Llamar a la función getBooks
    const books = await api.getBooks();
    res.send(books);
});

//localhost:3000/libro/5
router.get('/libro/:id', async (req, res) => {
  //console.log('' req.params.id); con el ':id' en '/libro/id' y el 'req.params.id' en api.getBookById(req.params.id)hacemos que al llamar la url especifica llame los datos requeridos automaticamente
  const book = await api.getBookById(req.params.id);

  res.render('pages/libro', {book});
});


module.exports = router;
