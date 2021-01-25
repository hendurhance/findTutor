export default {
    login(){},
    async signup(context, payload){
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCt1wI0qD06UC5lHxk3jE0TJTRSCDJa7Tk', {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })

        const responseData = await response.json()

        if(!response.ok){
            console.log(responseData)
            const error = new Error(responseData.message || 'Failed to authenticate, Nerd :)')
            throw error
        }

        console.log(responseData)
        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    }
}