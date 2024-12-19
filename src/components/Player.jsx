
import {useState} from 'react'

export default function Player({name,symbol,children}){
    const [isEditing, setIsEditing] = useState(false)
    function handleEditClick(){
        setIsEditing(true)
    }
    let playerName;
    let save='Edit'
    if(isEditing===false){
        playerName = <span className="player-name">{name}</span>
    }else{
        playerName = <input type='text' required></input>
        save = 'Save'
    }
    return(
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
                
            </span>
            <button onClick={()=>{handleEditClick()}}>{save}</button>
              
        </li>
    )
}