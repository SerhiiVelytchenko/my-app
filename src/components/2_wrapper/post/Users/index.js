import React from 'react';
import classes from './index.module.css'

let Users = (props) => {

    return(
        <div className={classes.items}>
            {props.users.map(user =>
                <div key={user.id} className={classes.item}>
                    <div className={classes.imgBtn}>
                        <div><img className={classes.img} src={user.url} /> </div>
                        {user.followed
                        ? <button className={classes.btn} onClick={() => {props.unfollow(user.id)}}> Follow </button>
                        : <button className={classes.btn} onClick={() => {props.follow(user.id)}}> Unfollow </button>}
                    </div>
                    <div className={classes.data}>
                        <div className={classes.element}>
                            <div> {user.fullName} </div>
                            <div> {user.status} </div>
                        </div>
                        <div className={classes.element}>
                            <div> {user.location.country} </div>
                            <div> {user.location.city} </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users