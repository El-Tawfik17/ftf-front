import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import api from '../api/players.js';



const AddPlayers = ()=>{
    const [state,setState] = useState([
        {
            firstName:"",
            lastName:"",
            old:"",
            position:"",
            wins:"",
            losses:"",
            points_scored:""
        }
    ]);
    const navigate =useNavigate();

    const handleInput = (event)=>{
        setState({
            ...state,
            [event.target.name] :event.target.value
        });

    }
    // const add = ()=>{
      
    //   console.log(state);
    // }
    const add = async (e) => {
         e.preventDefault();
        const {firstName,lastName,old,position,wins,losses,points_scored}= state;
        if ( firstName === "" || lastName===""|| old===""|| position ==="" ||wins ===""||losses ===""|| points_scored===""){
            alert( 'Tous les champs sont Obligatoire!!!');
        }

        const request = {
            id : uuidv4(),
            ...state
        }
        // console.log(request);
        // const requestNew =JSON.stringify(request);
        const response = await api.post('/api/v1/stats',request);
        if( response){
            navigate('/');  
        }else{
            navigate('/add');
        }

    }

    return (
        <div className='container'>
            <h1>
                AddPlayerComponent
            </h1>
            <form className="row g-3" onSubmit={add} >
  <div className="col-md-6">
    <label  className="form-label">Nom</label>
    <input type="text" className="form-control" name='lastName'   onChange={handleInput}/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Prenom</label>
    <input type="text" className="form-control" name='firstName'   onChange={handleInput}/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Age</label>
    <input type="number" className="form-control" name='old'  placeholder="Age"  onChange={handleInput}/>
  </div>
  <div className="col-md-6">
    <label  className="form-label">Position</label>
    <input type="text" className="form-control" name='position' placeholder="position"  onChange={handleInput}/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Victoire</label>
    <input type="number" className="form-control" name='wins'   onChange={handleInput}/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Defaite</label>
    <input type="number" className="form-control" name='losses'  onChange={handleInput}/>
  </div>
  <div className="col-12">
    <label className="form-label">Nombre de But</label>
    <input type="number" className="form-control" name='points_scored'  onChange={handleInput}/>
  </div>
   
  <div className="col-12">
    <button type="submit" className="btn btn-primary" >Add</button>
  </div>
</form>
        </div>

    );
}
export default AddPlayers;