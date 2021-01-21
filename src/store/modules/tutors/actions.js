export default {
    async registerTutor(context, data){
        const userId = context.rootGetters.userId
        const tutorData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const response = await fetch(`https://findtutor-vue-default-rtdb.firebaseio.com/tutors/${userId}.json`, {
            method: 'PUT',
            body: JSON.stringify(tutorData)
        })

        // const responseData = await response.json()

        if(!response.ok){
            // error
        }

        context.commit('registerTutor', {
            ...tutorData,
            id: userId
        })
    },
    async loadTutors(context){
        const response = await fetch(
           `https://findtutor-vue-default-rtdb.firebaseio.com/tutors.json`
        )
        const responseData = await response.json()

        if(!response.ok){
            //error
        }

        const tutors = []
        for(const key in responseData){
            const tutor = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            }
            tutors.push(tutor)
        }
        context.commit('setTutors', tutors)
    }
}