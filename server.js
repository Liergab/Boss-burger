//pag dedeclaire ng mga inistall natin na npm
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()



//frontend

//pag seset kung anung engine ang gagamit para magpa run sa localhost
app.set('view engine, ejs')


//Pagseset kung saan folder nakalagay ang mga html codes
app.set('views', path.join(__dirname,'/frontEnd/views'))


//Serve static files
//pag seset kung saan nakalagay ang nga asset at style
app.use('/static', express.static(path.join(__dirname,'/frontEnd/static')))

// middle ware
// para mabasa ni node yung ibabatong data gamit si body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//routes
//pagset sa localhost kung anung routes ang gagamitin.
//appRoutes galing sa app.js na folder. binaybay lang.
const appRoute =require('./Backend/routes/app')
app.use('/', appRoute)

//port
const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
})