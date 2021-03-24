import React from 'react';
import {  NavLink } from 'react-router-dom';
import classes from './nav.module.css';



function SideBar () {
    return(
        <nav className={classes.items}>

            <div className={classes.item}>
                <NavLink to='/profile' activeClassName={classes.active} >Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/massagers' activeClassName={classes.active}>Massagers</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/setting' activeClassName={classes.active}>Setting</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' activeClassName={classes.active}>People</NavLink>
            </div>
        </nav>
    )
}

export default SideBar