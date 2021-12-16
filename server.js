// Requiring Utilities
// =============================================================
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const sequelize = require("./config/connection.js");
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require("./controllers");
const { createServer } = require('http');
const { Server } = require('socket.io');
const { User, } = require('./models');


// Sets up the Express/Socket App
// =============================================================
const app = express();
const socketServer = require('./controllers/socketServer');
const httpServer = createServer(app);
const io = new Server(httpServer);
socketServer(io);
const PORT = process.env.PORT || 3000;

// Declaring Sessions
// =============================================================
const sess = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};
app.use(session(sess));

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory and Custom Routes
// =============================================================
app.use(express.static('public'));
app.use("/", routes);

// Initializing handlebars
// =============================================================
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Running Server
// =============================================================
sequelize.sync({ force: false }).then(function() {
    httpServer.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});
