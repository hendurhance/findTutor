export default{
    setUser(state, payload){
        state.token = payload.token
        state.userId = payload.userId
        state.alreadyAutoLogout = false
    },
    setAutoLogout(state){
        state.alreadyAutoLogout = true
    }
}