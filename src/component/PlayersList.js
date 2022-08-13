import React from "react";
import PlayersCard from "./PlayersCard";
import api from "../api/players.js";
import { useState, useEffect } from "react";
const PlayersList = ()=>{
let [state, setState] = useState([]);
    const retriveAllPlayers = async()=>{
        const response = await api.get('/api/v1/stats'); 
        console.log(response.data);
        return response.data;    
        }
useEffect( ()=>{
    const getAllPlayers = async ()=>{
     const players=  await retriveAllPlayers();
     if ( players){
        setState(players); 
     }
    }
    getAllPlayers();
    
},[]);

const renderPlayersList= state.map((player)=>{
    return(
        <React.Fragment>
            <PlayersCard player={player}/>        
        </React.Fragment>
        
     

    )});
    

    return(
        <div className="row g-0">
                {renderPlayersList}
        </div>
    );
}

export default PlayersList;