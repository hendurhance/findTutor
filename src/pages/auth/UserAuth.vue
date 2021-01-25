<template>
    <base-card>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" v-model.trim="email">
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" v-model.trim="password">
            </div>
            <p v-if="!formIsValid">Please enter a valid email address and password length should be greater than 6</p>
            <base-button>{{ submitBtnCaption }}</base-button>
            <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchModeBtn }}</base-button>
        </form>
    </base-card>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            password: '',
            formIsValid: true,
            mode: 'Login'
        }
    },
    computed: {
        submitBtnCaption(){
            if(this.mode === 'login'){
                return 'Login'
            }else{
                return 'Signup'
            }
        },
        switchModeBtn(){
            if(this.mode === 'login'){
                return "You're not a Member?"
            }else{
                return 'Nerd, Login?'
            }
        }
    },
    methods: {
        submitForm(){
            this.formIsValid = true 
            if(
                this.email === '' || 
                !this.email.includes('@') ||
                 this.password.length < 6
            ){
                this.formIsValid = false
                return
            }

            if(this.mode === 'login'){
                // error
            }else{
                this.$store.dispatch('signup', {
                    email: this.email,
                    password: this.password
                })
            }
        },
        switchAuthMode(){
            if(this.mode === 'login'){
                this.mode = 'signup'
            }else{
                this.mode = 'login'
            }
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>