import React from "react";
import user1 from "../images/user1.png";
import {Link} from "react-router-dom";

const PlayersCard = (props)=> {
    const {id,firstName,lastName,position }= props.player;
    console.log(props);

    return (
            <div className="card mb-3" style={{maxWidth : "400px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={user1} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{`Nom:${lastName }`}</h5>
                            <h5 className="card-title">{`Prenom:${firstName }`}</h5>
                            <h5 className="card-title">{`Position:${position }`}</h5>
                            <Link  to={`/detail/${id}`}>
                            <button type="button" class="btn btn-secondary btn-sm">More information</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default PlayersCard;