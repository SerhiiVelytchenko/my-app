const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'


let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Lina', status: 'Boos', location: { city: 'Sumy', country: 'Uk'}, url: 'https://cs21.babysfera.ru/b/a/5/1/77061456.140277710.jpeg'},
        {id: 2, followed: true, fullName: 'Sasha', status: 'Boos', location: { city: 'Kiev', country: 'Uk'}, url: 'https://cs21.babysfera.ru/b/a/5/1/77061456.140277483.jpeg'},
        {id: 3, followed: false, fullName: 'Maxim', status: 'Boos', location: { city: 'Lviv', country: 'Uk'}, url: 'https://cs21.babysfera.ru/b/a/5/1/77061456.140277676.jpeg'},
    ]
}

const UsersReducer = (state = initialState, action) => {

    switch(action.type) {

        case FOLLOW:
            return { ...state, users: state.users.map(user =>{
                if (user.id===action.userID) {
                    return{...user, followed: true}
                }
                return user
            } )}

        case UNFOLLOW:
            return { ...state, users: state.users.map(user =>{
                if (user.id===action.userID) {
                    return{...user, followed: false}
                }
                return user
            } )}

        case SET_USERS:
            return { ...state, users: [ ...state.users, ...action.users ]}

        default: return state
}

}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})

export default UsersReducer
