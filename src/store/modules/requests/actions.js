export default{
    async contactTutor(context, payload){
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        }
        const response = await fetch(`https://findtutor-vue-default-rtdb.firebaseio.com/requests/${payload.tutorId}.json`,{
            method: 'POST',
            body: JSON.stringify(newRequest)
        })

        const responseData = await response.json()
        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to send request, Nerd :)')
            throw error
        }

        newRequest.id = responseData.name
        newRequest.tutorId = payload.tutorId

        context.commit('addRequest', newRequest)
    },
    async fetchRequests(context){
        const tutorId = context.rootGetters.userId
        const response = await fetch(`https://findtutor-vue-default-rtdb.firebaseio.com/requests/${tutorId}.json`)
        const responseData = await response.json()

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to fetch request, Nerd :)')
            throw error
        }

        const requests = []

        for(const key in responseData){
            const request = {
                id: key,
                tutorId: tutorId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            }
            requests.push(request)
        }

        context.commit('setRequests', requests)
    }
}