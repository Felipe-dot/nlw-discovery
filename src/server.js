//Server
const express = require('express')
const server = express()
const {pageLanding,
       pageStudy,
       pageGiveClasses,
       saveClasses} = require('./pages')

//to set up nunjucks(template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
}) 

server
    //Receive the data do req.body()
    .use(express.urlencoded({extended: true}))
    //Configuring static files(Css,images,scripts)
    .use(express.static("public"))
    //Routes of aplication
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)

    .listen(5500);