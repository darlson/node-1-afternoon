const products = require('../products.json')

const getProducts = (req, res) => {
    if (req.query.price){
        const filtered = products.filter(e => e.price >= parseInt(req.query.price))
        return res.status(200).send(filtered)
    } else {
        res.status(200).send(products)
    }
}

module.exports = getProducts