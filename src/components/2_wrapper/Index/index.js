import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Massagers from '../post/Massagers/Dialogs';
import Music from '../post/Music/index';
import News from '../post/News/index';
import ProfileContainer from '../post/Profile/indexContainer';
import Setting from '../post/Setting/index';
import UsersContainer from '../post/Users/indexContainer'
import Nav from '../nav/index';

import classes from './index.module.css'


function Index() {
    return(
        <BrowserRouter>
            <div className={classes.index}>
                <div className={classes.nav}>
                    <Nav/>
                </div>
                <div className={classes.post}>
                    <Route path='/massagers' component={Massagers}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/news' component={News}/>
                    <Route path='/profile' component={ProfileContainer}/>
                    <Route path='/setting' component={Setting}/>
                    <Route path='/users' component={UsersContainer}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Index