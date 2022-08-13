import React, { useState,useEffect } from "react";
import {Link, useParams,useNavigate} from "react-router-dom";
import api from "../api/players.js"
import user1 from "../images/user1.png";

const PayersDetail =()=>{
    const {playerId}=useParams();
    const [state,setState]= useState([]);
    const navigate = useNavigate(); 

   
    useEffect(()=>{
        
        const retrivePlayer = async()=>{
            const response= await api.get(`/api/v1/stats/${playerId}`);
            console.log(response.data);
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
    const del = (event)=>{
        event.preventDefault();
        alert('suppression');
        api.delete(`/api/v1/stats/${playerId}`);
        navigate('/');


    }
    const{ firstName, lastName,old,position,wins,losses,points_scored}=state;


    return (
        <div className="container ">
             <h1>Players Detail!!!</h1>
            <div className="card " style={{width: "18rem"}}>
                    <img src={user1} className="card-img-top" alt="..."/>
                    <div className="card-body ">
                         
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{`Nom: ${lastName}`}</li>
                        <li className="list-group-item">{`Prenom: ${firstName}`}</li>
                        <li className="list-group-item">{`Age: ${old}`}</li>
                        <li className="list-group-item">{`Position: ${position}`}</li>
                        <li className="list-group-item">{`Victoire: ${wins}`}</li>
                        <li className="list-group-item">{`Defaite: ${losses}`}</li>
                        <li className="list-group-item">{`Nombre de But: ${points_scored}`}</li>
                    </ul> 
                        {/* <h5 className="card-title">{`Nom: ${lastName}`}</h5> */}
                        {/* <h5 className="card-text">{`Prenom: ${firstName}`}</h5>
                        <h5 className="card-text">{`Age: ${old}`}</h5>
                        <h5 className="card-text">{`Position: ${position}`}</h5>
                        <h5 className="card-text">{`Victoire: ${wins}`}</h5>
                        <h5 className="card-text">{`Defaite: ${losses}`}</h5>
                        <h5 className="card-text">{`Nombre de But: ${points_scored}`}</h5>
                    </table>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"></li>
                        <li className="list-group-item"></li>
                        <li className="list-group-item"></li>
                    </ul> */}
                    <div className="card-body">
                    <Link to= {`/edit/${playerId}`}>
                    <div  className="card-link btn btn-secondary ">Editer</div>
                    </Link>
                    <div  onClick={del} className="card-link btn btn-primary">Supprimer</div>

                    </div>
                    
            </div>
        </div>
            
           

            
    
    );
}

export default PayersDetail;