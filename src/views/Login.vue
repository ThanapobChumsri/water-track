<template>
    <div class="vue-tempalte">
        <form @submit.prevent="login">
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

                <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>

                <p class="forgot-password text-right mt-2 mb-4">
                    Create new account
                    <router-link to="/register">sign up?</router-link>
                </p>

            </div>
        </form>
    </div>
</template>

<script>
//import AuthService from "@/services/AuthServices"
import AuthUser from "@/store/AuthUser"
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
        async login(){
            console.log(this.form)
            let res = await AuthUser.dispatch('login', this.form)
            //let res = await AuthService.login(this.form)
            if(res.success){
                this.$swal("Login Success",`Welcome, ${res.user.username}`,"success")
                console.log(res.user.role.type)
                 if(res.user.role.type == 'authenticated'){
                    this.$router.push('/home')
                }else{
                    this.$router.push('/admin')
                    }
            } 
            else{
                this.$swal("Login Failed",res.message,"error")
            }  
            },
        }
}
</script>

<style lang="scss" scoped>
    div {
        margin-bottom: 20px;
    }
</style>