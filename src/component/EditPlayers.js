import React from 'react';
import { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/players.js';

const EditPlayers = ()=>{
    const {playerId}=useParams();
    const [state,setState]= useState([]);
    const navigate=useNavigate();
     

   
    useEffect(()=>{ 
        const retrivePlayer = async()=>{

            const response= await api.get(`/api/v1/stats/${playerId}`);
            return response.data;
        }
        const getPlayer= async()=>{
            const response= await retrivePlayer();
            if (response){
                setState(response)
            }
        }
        getPlayer();
    },[playerId]);
    const handleInput = (event)=>{
        setState({
            ...state,
            [event.target.name] :event.target.value
        });}

    const update = (event)=>{
        event.preventDefault();
        const{ firstName, lastName,old,position,wins,losses,points_scored}=state;
        if ( firstName === "" || lastName===""|| old===""|| position ==="" ||wins ===""||losses ===""|| points_scored===""){
            alert( 'Tous les champs sont Obligatoire!!!');
        }
        const response = api.put(`/api/v1/stats/${playerId}`,state);

        if(response){
            navigate('/');

        }else{
            navigate(`/edit/${playerId}`);
        }

        
    }
    const{ firstName, lastName,old,position,wins,losses,points_scored}=state;
    
    return (
        <div className='container'>
        <h1>
            AddPlayerComponent
        </h1>
        <form className="row g-3" onSubmit={update} >
<div className="col-md-6">
<label  className="form-label">Nom</label>
<input type="text" className="form-control" name='lastName' value={lastName}   onChange={handleInput}/>
</div>
<div className="col-md-6">
<label  className="form-label">Prenom</label>
<input type="text" className="form-control" name='firstName' value={firstName}  onChange={handleInput}/>
</div>
<div className="col-md-6">
<label  className="form-label">Age</label>
<input type="number" className="form-control" name='old'  placeholder="Age" value={old} onChange={handleInput}/>
</div>
<div className="col-md-6">
<label  className="form-label">Position</label>
<input type="text" className="form-control" name='position' placeholder="position" value={position}  onChange={handleInput}/>
</div>
<div className="col-md-6">
<label className="form-label">Victoire</label>
<input type="number" className="form-control" name='wins'  value={wins}  onChange={handleInput}/>
</div>
<div className="col-md-6">
<label className="form-label">Defaite</label>
<input type="number" className="form-control" name='losses' value={losses} onChange={handleInput}/>
</div>
<div className="col-12">
<label className="form-label">Nombre de But</label>
<input type="number" className="form-control" name='points_scored' value={points_scored}  onChange={handleInput}/>
</div>

<div className="col-12">
<button type="submit" className="btn btn-primary" >update</button>
</div>
</form>
    </div>
    );
}
export default EditPlayers;