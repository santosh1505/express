const express = require('express')
const path = require('path')
const app = express()
const port = 3000
//var exphbs  = require('express-handlebars');
const { engine } = require('express-handlebars');


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'static')))
app.use('/',require(path.join(__dirname,'routes/demo.js')))


//app.get('/', (req, res) => {
  //res.send('Hello World!')
//})



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
