const CLICK = 'CLICK'
const CHANGE = 'CHANGE'



let initialState = {
                massagers: [
                    { id:1, url: '', like: 5, text: 'yoo' },
                    { id:2, url: '', like: 5, text: 'yoo' },
                    { id:3, url: '', like: 5, text: 'yoo' },
                ],
                value: ''
}

const ProfileReducer = (state = initialState, action) => {

    switch(action.type) {

        case CLICK:
            return {
                ...state,
                    massagers: [ ...state.massagers,
                        { id: 4, url: '', like: 5, text: state.value }],
                    value: '',
                }

        case CHANGE:
            return{
                ...state, value: action.event.target.value
            };

        default: return state
}

}

export const handleClickAC = () => ({type: CLICK})
export const handleChangeAC = (event) => ({type: CHANGE, event})


export default ProfileReducer
