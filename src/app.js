const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const indexRoutes = require('./routes/index.routes.js');


//configuración de los recursos estáticos
app.use(express.static(path.join(__dirname,'..', 'public')));

//configuración del motor de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

//configuración para recibir datos de los formularios
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', indexRoutes);

app.listen(PORT, () => 'Servidor corriendo en http://localhost:' + PORT)