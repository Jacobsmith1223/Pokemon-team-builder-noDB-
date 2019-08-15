const express = require('express')
const cors = require('cors')

// Dummy Data
let pokemon = [{
    id:1,
    name: 'Bulbasaur',
    type: 'Grass',
    image: 'https://cdn.bulbagarden.net/upload/thumb/6/64/Saur_Bulbasaur.png/200px-Saur_Bulbasaur.png'
},
{
    id:2,
    name: 'Agumon',
    type: 'digimon',
    image: 'https://pbs.twimg.com/media/D5x0N1LX4AAYxj4.jpg'
},
{
    id:3,
    name: 'Alolan Muk',
    type: 'Poison',
    image:'http://static.pokemonpets.com/images/monsters-images-800-800/16089-Alolan-Muk.png'
}]


// Make the app 
const app = express()

// TLM
app.use(express.json())
app.use(cors())

// Endpoints

app.get('/api/pokemon', (req,res) => {
    res.status(200).send(pokemon)
})
app.post('/api/pokemon',(req,res) => {
    const {name,type,image} = req.body;
    let id = pokemon.length +1;
    if(pokemon.length === 6){
        console.log('Team Full! delete a mon to add more')
    }else{
    const newPokemon = {
        id,
        name,
        type,
        image
    }
    pokemon.push(newPokemon)

    res.status(200).send(pokemon)}
})
app.put('/api/pokemon/:id',(req,res) => {
    const {id} = req.params; 
    const updateMons = req.body;
    let poke = pokemon.find((element) => {
        return element.id === +id
    })
    poke.name = updateMons.name;
    poke.type = updateMons.type
    poke.image = updateMons.image;
    res.status(200).send(pokemon)
})
app.delete(`/api/pokemon/:id`,(req,res) => {
    const {id} = req.params;
    pokemon = pokemon.filter((element) => {
        return element.id !== +id
    })
    res.status(200).send(pokemon)
})

// Make the server listen 

app.listen(8080,() => {
    console.log('Server is up and ready to serve')
});