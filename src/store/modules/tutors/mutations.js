export default {
    registerTutor(state, payload) {
        state.tutors.push(payload)
    },
    setTutors(state, payload){
        state.tutors = payload
    }
}