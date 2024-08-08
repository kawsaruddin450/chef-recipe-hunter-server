const express = require('express')
const app = express()
const port = process.env.PORT ||  3000
const chefs = require('./data/chefs.json');
const recipes = require('./data/recipes.json');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chefs', (req, res)=> {
    res.send(chefs);
})

app.listen(port, () => {
    console.log(`Chef recipe hunter server is running on server: ${port}`)
})

