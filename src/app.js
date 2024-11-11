const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const morgan = require('morgan');

const PORT = 3000;

const connectDB = require("./config/connectDB.js");

const indexRoutes = require('./routes/index.routes.js');
const podcastRoutes = require('./routes/podcast.routes.js');
const webinarRoutes = require ('./routes/webinars.routes.js');
const hubRoutes = require ('./routes/hub.routes.js');
const plantingRoutes = require('./routes/planting.routes.js');
const postsRoutes = require('./routes/posts.routes.js');
const volunteersRoutes = require('./routes/volunteers.routes.js')
const usersRoutes = require('./routes/users.routes.js')

const checkLocals = require('./middlewares/checklocals')

//registro de peticiones
app.use(morgan('short'));

//configuración de los recursos estáticos
app.use(express.static(path.join(__dirname,'..', 'public')));

//configuración del motor de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));

//configuración para recibir datos de los formularios
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use(methodOverride('_method'));

app.use(session({
    secret: 'my_secret',
    resave: false,
    saveUninitialized: true,
  }));

//conexión con mongodb
connectDB();

app.use(checkLocals)


app.use('/', indexRoutes);
app.use('/podcasts',podcastRoutes);
app.use('/webinars', webinarRoutes);
app.use('/hubrecircular',hubRoutes);
app.use('/plantandofuturo',plantingRoutes);
app.use('/volunteers', volunteersRoutes);
app.use('/posts', postsRoutes);
app.use('/users', usersRoutes);

app.listen(PORT, () => console.log('Servidor corriendo en http://localhost:' + PORT))