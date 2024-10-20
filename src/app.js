const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

const indexRoutes = require('./routes/index.routes.js');
const podcastRoutes = require('./routes/podcast.routes.js');
const contactRoutes = require('./routes/contacto.routes.js');
const adminRoutes = require('./routes/admin.routes.js');
const webinarRoutes = require ('./routes/webinar.routes.js');
const plantandoRoutes = require('./routes/plantando.routes.js');
const hubRoutes = require('./routes/hub.routes.js');
const voluntariadoRoutes = require ('./routes/voluntariado.routes.js');
const actividadesRoutes = require ('./routes/actividades.routes.js');

//configuración de los recursos estáticos
app.use(express.static(path.join(__dirname,'..', 'public')));

//configuración del motor de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

//configuración para recibir datos de los formularios
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/', indexRoutes);
app.use('/podcast',podcastRoutes);
app.use('/contacto',contactRoutes);
app.use('/admin', adminRoutes);
app.use('/webinar', webinarRoutes);
app.use('/plantandofuturo', plantandoRoutes);
app.use('/hubrecircular', hubRoutes);
app.use('/voluntariado', voluntariadoRoutes);
app.use('/actividades', actividadesRoutes);

app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT))