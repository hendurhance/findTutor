export default{
    userId(state){
        return state.userId
    },
    token(state){
        return state.token
    },
    isAuthenticated(state){
        return !!state.token
    },
    alreadyAutoLogout(state){
        return state.alreadyAutoLogout
    }
}