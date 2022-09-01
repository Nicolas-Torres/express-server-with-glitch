const express = require('express')
const app = express()

const Contenedor = require('./contenedor.js')

const db = new Contenedor('./productos.txt')

app.get('/productos', async (req,res) => {
    const productos = await db.getAll()
    res.send(productos)
})

app.get('/productoRandom', async (req,res) => {
    const productos = await db.getAll()
    const tamaño = productos.length
    const randomId = Math.floor(Math.random() * (tamaño - 1 + 1) + 1)
    const producto = await db.getById(randomId)
    res.send(producto)
})



const server = app.listen(8080, () => {
    console.log(`Desafío: Servidor express iniciado - PORT: ${server.address().port}`)
})