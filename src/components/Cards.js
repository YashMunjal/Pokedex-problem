import React,{useState} from "react";
import history from "../history"
import { useHistory } from 'react-router-dom'

function Cards({name,url}) {
    
    var x=url.toString().split('/');
    var link=x[x.length-2];

    const history=useHistory();
  return (
    <div>
        <div className="card">
          <div className="card_image">
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${link}.png`} style={{height:200+'px',width:200+'px',marginTop:30+'px'}} alt="pokemon"></img>
          </div>
          <div className="card_title title-white">
            <p>{name}</p>
            <button onClick={()=>history.push('/details/'+link)}>Click here to See Details</button>
          </div>
        </div>
        
    </div>
  );
}

export default Cards;
