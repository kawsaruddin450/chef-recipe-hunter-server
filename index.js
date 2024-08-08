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

app.get('/recipes', (req, res)=> {
    res.send(recipes);
})

app.get('/recipes/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const recipe = recipes.find( r => r.id === id);
    res.send(recipe);
})
app.get('/chefs/:id', (req, res)=> {
    const id = parseInt(req.params.id);
    const chefRecipes = recipes.filter(r => r.chef_id === id);
    res.send(chefRecipes);
})

app.listen(port, () => {
    console.log(`Chef recipe hunter server is running on server: ${port}`)
})

