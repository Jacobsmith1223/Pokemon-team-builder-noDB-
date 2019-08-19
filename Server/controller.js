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
},{
    id:4,
    name: 'Sceptile',
    type: 'Grass',
    image:'https://i.pinimg.com/originals/01/d8/f1/01d8f17678dc2d862e075e30be8e9565.png'
},]


let getget = (req,res) => {
    res.status(200).send(pokemon)
}

let getpost = (req,res) => {
    const {name,type,image} = req.body;
    let id = pokemon.length +1;
    if(pokemon.length === 6){
       
    }else{
    const newPokemon = {
        id,
        name,
        type,
        image
    }
    pokemon.push(newPokemon)

    res.status(200).send(pokemon)}
}

let getput = (req,res) => {
    const {id} = req.params; 
    const updateMons = req.body;
    let poke = pokemon.find((element) => {
        return element.id === +id
    })
    poke.name = updateMons.name;
    poke.type = updateMons.type
    poke.image = updateMons.image;
    res.status(200).send(pokemon)
}

let getdelete = (req,res) => {
    const {id} = req.params;
    pokemon = pokemon.filter((element) => {
        if (element.id !== +id){
            if(element.id > +id){
                element.id--
                return element
            }else{return element}
        }
    })
    res.status(200).send(pokemon)
    
}



module.exports = {getput,
getpost,
getget,
getdelete}


