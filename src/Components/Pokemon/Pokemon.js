import React,{Component} from 'react'
import './Pokemon.css'
import * as Icon from 'react-feather'
import axios from 'axios';

class Pokemon extends Component{
    constructor(){
        super()

        this.state={
            edit:false,
            editName: '',
            editType: '',
            editImage: ''
        }

    }

    handleToggle= () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleEdit = (val) => {
        this.setState({
            editName: val
        })
    }
    handleEdit2 = (val) => {
        this.setState({
            editType: val
        })
    }
    handleEdit3 = (val) => {
        this.setState({
            editImage: val
        })
    }

    handleUpdateMon = (id)=> {
        let updatepokemon = {
            name:this.state.editName,
            type:this.state.editType,
            image:this.state.editImage
        }
        axios.put(`http://localhost:8080/api/pokemon/${id}`,updatepokemon).then(response => {
            this.props.updateMon(response.data)
            this.handleToggle()
        })
    }

    handleDeleteMon = () => {
        axios.delete(`/api/pokemon/${this.props.pokemon.id}`).then(response => {
            this.props.deleteMon(response.data)
          
        })
        console.log('delete?')
    }


render(){
    const {id,name,type,image} = this.props.pokemon
        return(
            <div>
                {!this.state.edit
                ?
             (<div className="pokemon-holder">
                <div className="image-div">
                     <img src={image} alt="" className="image-sizer"/>
                </div>
                <div className="words">
                    <p> # {id}</p>
                    <p>Name: {name}</p>
                     <p>Type: {type}</p>
                </div>
                <div className="under-mon">
                     <Icon.Edit3 size="15" onClick= {this.handleToggle}/>
                     < Icon.ThumbsDown size='15' onClick={this.handleDeleteMon} />
                </div>
             </div>
             )
             :
             (<div>
                 <input placeholder="edit name here" name="editName" onChange ={(e)=>this.handleEdit(e.target.value)} value={this.state.editName}/>

                 <input placeholder="edit type here" name="editType" onChange ={(e)=>this.handleEdit2(e.target.value)} value={this.state.editType}/>

                 <input placeholder="edit image here" name="editImage"
                 onChange ={(e)=>this.handleEdit3(e.target.value)} value={this.state.editImage} />

                <button onClick={(val)=>this.handleUpdateMon (this.props.pokemon.id)}>Submit</button>

            
                 
                 </div>)}
             </div>
        )
    }   
}
    



export default Pokemon;