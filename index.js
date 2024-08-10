const express = require('express')
const cors = require('cors')
const app = express()
const port = 6969
const chef = require('./data/chefs.json')
const recipe = require('./data/recipes.json')


app.use(cors())

app.get('/', (req, res) => {
  res.send('server 6969 is working')
})

app.get('/chefs', (req,res)=>{
    res.send(chef)
})


app.get('/chef/:id', (req,res)=>{
   const getId = req.params.id
   const id=parseInt(getId);
  const selectedchef = chef.filter(c => c.id === id);

  res.send(selectedchef)
});

app.get('/recipes', (req,res)=>{
  res.send(recipe)
})

 app.get('/chefs/:id', (req,res)=>{
   const recipeID = req.params.id
   const id=parseInt(recipeID);
   const selectedRecipe = recipe.filter(c => parseInt(c.chef_id) === id)
  res.send(selectedRecipe)  
});
// 
 



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})