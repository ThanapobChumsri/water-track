<template>
    <div class="vue-tempalte">
        <form>
            <div>
                <h3>Sign In</h3>

                <div class="form-group">
                    <label>Email address </label>
                    <input type="email" class="form-control form-control-lg" v-model="form.email">
                </div>

                <div>
                    <label>Password </label>
                    <input type="password" class="form-control form-control-lg" v-model="form.password">
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block" @click="checkDataLogin">Sign In</button>

                <p class="forgot-password text-right mt-2 mb-4">
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