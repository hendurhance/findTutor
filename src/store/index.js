import { createStore } from 'vuex'

import tutorsModule from './modules/tutors/index.js'
import requestsModule from './modules/requests/index.js'


const store = createStore({
    modules: {
        tutors: tutorsModule,
        requests: requestsModule
    },
    state(){
        return {
            userId: 'c3'
        };
    },
    getters: {
        userId(state){
            return state.userId
        }
    }
})

export default store