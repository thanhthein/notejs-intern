// Set timezone: Asia
process.env.TZ = 'Asia/Ho_Chi_Minh'

var express = require('express'),
  config_mog = require('./config/config').CONFIG_MONGO,
  config = require('./config/config').CONFIG_API,
  port = process.env.PORT || config.__port_server,
  app = express(),
  path = require('path'),
  html = require('express-handlebars'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose')

// Config mongoose
mongoose.Promise = global.Promise
mongoose.connect(config_mog.__MONGO_LINK)

// Config template views
app.engine('html', html({
  extname: 'html',
  defaultLayout: 'template-layout',
  layoutsDir: __dirname + '/views/'
}))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'html')

// Config body parser json
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

// Config Public folder
app.use(express.static(path.join(__dirname, 'public')))

// Model config
var categoryModel = require("./models/categoryModel"),
  filmModel = require('./models/filmModel'),
  userModel = require('./models/userModel')

// Route config
var adminRoute = require('./routes/adminRoute')(app),
  categoryRoute = require('./routes/categoryRoute')(app),
  filmRoute = require('./routes/filmRoute')(app),
  userRoute = require('./routes/userRoute')(app),
  home = require('./routes/appRoute')(app),
  uploadRoute = require('./routes/uploadRoute')(app)

app.listen(port)

console.log('App has been connected from port: ' + port)