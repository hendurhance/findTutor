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
    }
}