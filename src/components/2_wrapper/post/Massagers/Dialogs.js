import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'


const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                <NavLink to='/massagers/Serhii' className={classes.dialog} >
                    Serhii
                </NavLink>

                <NavLink to='/massagers/Alla' className={classes.dialog} activeClassName={classes.active}>
                    Alla
                </NavLink>

                <NavLink to='/massagers/Alex' className={classes.dialog} activeClassName={classes.active}>
                    Alex
                </NavLink>

            </div>
        </div>
    )
}

export default Dialogs