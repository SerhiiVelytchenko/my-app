import React from 'react';
import classes from './index.module.css'

let Profile = (props) => {

    return(
        <div>
            <div> My Post </div>
            <div>
                <textarea onChange={props.handleChange} value={props.profile222.value}> </textarea>
                <button onClick={props.handleClick}>Yoooooo</button>
            </div>
            
            {props.profile222.massagers.map(mess => {
                return (
                    <div key={mess.id}>
                        <img src={mess.url}></img>
                        <div>{mess.like}</div>
                        <div>{mess.text}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Profile