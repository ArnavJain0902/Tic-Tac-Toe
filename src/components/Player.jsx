
import {useState} from 'react'

export default function Player({initialName,symbol}){
    const [isEditing, setIsEditing] = useState(false)
    const [playerName,setPlayerName]= useState(initialName);

    
    function handleEditClick(){
        setIsEditing((editing)=>!editing)
    }

    function handleChange(event){
        setPlayerName(event.target.value)
    }


    let editablePlayerName;
    let btnCaption='Edit'
    if(isEditing===false){
        editablePlayerName= <span className="player-name">{playerName}</span>
    }else{
        editablePlayerName = <input type='text' value={playerName} required onChange={handleChange}></input>
        btnCaption = 'Save'
    }


    return(
        <li>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
                
            </span>
            <button onClick={()=>{handleEditClick()}}>{btnCaption}</button>
              
        </li>
    )
}