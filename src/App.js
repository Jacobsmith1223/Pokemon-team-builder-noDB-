import React,{Component} from 'react'
import axios from 'axios';

// Components
import Header from './Components/Header/Header'

// Stylesheets
import 'reset-css'
import './App.css'
import Pokemon from './Components/Pokemon/Pokemon';



export default class App extends Component{
  constructor(){
    super()


    this.state = {
      pokemon: [],
      name:'',
      type: '',
      image:''
    }
  }
  // Lifecycle methods
  componentDidMount(){
    axios.get('http://localhost:8080/api/pokemon').then((response) => {
      this.setState({pokemon:response.data})
    })
    .catch((error)=> {console.log(error)})
  }

  addPokemon = (event) => {
    event.preventDefault();

    const {name,type,image} = this.state;

    const body = {
      name,
      type,
      image
    }
    axios.post('/api/pokemon', body).then(response => {
      this.setState({pokemon:response.data,
      name:'',
    type:'',
  image:''})
    })
  }

  updateMon = (data) => {
      this.setState({
        pokemon: data
  })}

  deleteMon = (data) => {
    this.setState({
      pokemon:data
    })
  }


  render(){

    const mappedMons = this.state.pokemon.map((pokemon,index) => {
      return <Pokemon key = {index} pokemon = {pokemon} updateMon = {this.updateMon} deleteMon={this.deleteMon}/>
    })


    return(

    <div className="app-body">
      <Header />
      <div className="new-pokemon-box">
        <div className="mini-title">New Pokemon:</div>
        <form className="new-pokemon-form">
         <div>
          <label>Name</label>
          <input type="text" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/>
          </div>
          <div>
          <label>Type</label>
          <input type = "text" value={this.state.type} onChange={(event) => this.setState({type: event.target.value})}/>
          </div>
          <div>
          <label>Image</label>
          <input type = "text" value={this.state.image} onChange={(event) => this.setState({image: event.target.value})}/>
          </div>
          <div >
          <button className="pokebutton" id="cursor" onClick={this.addPokemon}>Add Pokemon</button>
          </div>
        </form>
      </div>
      {mappedMons}
    </div>
    )
  }
}
