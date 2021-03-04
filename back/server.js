const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')

// routes

const users = require("./routes/users")



//configuracoes body parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//configuracao mongoose
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/iludometro', {useNewUrlParser: true}).then(() => {
	console.log("Conectado ao mongo")
}).catch((erro) => {
	console.log("Erro ao se conectar" + erro)
})


//para poder acessar de uma aplicacao externa as apis
//especificado a url da aplicação que podera acessar as apis (localhost:3000)
app.use((req, res, next) => {
	console.log('Acessou o middleware')
	res.header("Access-Control-Allow-Origin", "http://localhost:3000")
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	app.use(cors())
	next()
})



//routes
app.use('/users', users)




const PORT = 8081
app.listen(PORT, () => {
	console.log("Servidor rodando")
})
console.log('eai magrao')