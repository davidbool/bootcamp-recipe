const express = require('express')
const request = require('request')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const port = 8080
app.listen(port, function () {
    console.log('Server is up and running on port ' + port)
})


app.get('/sanity/:ingredient', function (req, response) {
    const ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, res) {
        const arr = JSON.parse(res.body)
        const recipes = []
        for(let obj of arr.results){
            let recipe = {
                title: obj.title,
                thumbnail: obj.thumbnail,
                href: obj.href,
                ingredients: obj.ingredients
            }
            recipes.push(recipe)

        }
        response.send(recipes)
    })
})