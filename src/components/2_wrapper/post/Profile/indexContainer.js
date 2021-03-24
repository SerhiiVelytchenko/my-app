import Profile from './index'
import {connect} from 'react-redux'
import { handleClickAC,  handleChangeAC } from '../../../../redux/profile-reducer';

let mapStateToProps = (state) => {
    return {
        profile222: state.profile111
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (event) => {
            dispatch(handleClickAC(event))
            event.preventDefault()
        },
        handleChange: (event) => {
            dispatch(handleChangeAC(event))
        },
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)