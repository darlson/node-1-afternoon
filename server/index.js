const express = require('express')
const app = express()
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const SERVER_PORT = 3030

app.get('/api/products', getProducts)
app.get('/api/product/:id', getProduct)

app.listen(SERVER_PORT, () =>
    console.log(`Server is running on port ${SERVER_PORT}`))