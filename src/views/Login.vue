<template>
    <div>
        <form>
            <div>
                <h3>Sign In</h3>

                <div>
                    <label>Email address </label>
                    <input type="email" v-model="form.email">
                </div>

                <div>
                    <label>Password </label>
                    <input type="password" v-model="form.password">
                </div>

                <button type="submit" @click="checkDataLogin">Sign In</button>

                <p>
                    Create new account
                    <router-link to="/register">sign up?</router-link>
                </p>

            </div>
        </form>
    </div>
</template>

<script>
import dataStore from '@/store/data'
export default {
    data() {
            return {
                form:{
                    email:'',
                    password:'',
                    
                }
            }
        },
        methods:{
            checkDataLogin(){
            let payload = {
                email: this.form.email,
                password: this.form.password,
            }
            dataStore.dispatch('checkDataLogin', payload)
            console.log(payload)
            }
        }
}
</script>

<style lang="scss" scoped>
    div {
        margin-bottom: 20px;
    }
</style>