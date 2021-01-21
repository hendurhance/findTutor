export default {
    tutors(state) {
        return state.tutors;
    },
    hasTutors(state){
        return state.tutors && state.tutors.length > 0
    },
    isTutor(state, getters, rootState, rootGetters){
        const tutors = getters.tutors
        const userId = rootGetters.userId
        return tutors.some(tutor => tutor.id === userId)
    },
    justUpdate(state){
        const lastFetch = state.lastFetch
        if(!lastFetch){
            return true
        }
        const currentTimestamp = new Date().getTime()
        return (currentTimestamp - lastFetch) / 10000 > 60
    }
}