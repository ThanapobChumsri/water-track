<template>
      <div class="vue-tempalte">
            <form @submit.prevent="register">
                  <h3>Sign Up</h3>

                  <div class="form-group">
                  <label>Full Name </label>
                  <input type="text" class="form-control form-control-lg" v-model="form.username">
                  </div>

                  <div>
                  <label>Email address </label>
                  <input type="email" class="form-control form-control-lg" v-model="form.email">
                  </div>

                  <div>
                  <label>Password </label>
                  <input type="password" class="form-control form-control-lg" v-model="form.password">
                  </div>

                  <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

                  <p class="forgot-password text-right">
                  Already registered 
                  <router-link to="/login">sign in?</router-link>
                  </p>
            </form>
      </div>
</template>

<script>
//import AuthService from '@/services/AuthServices'
import AuthUser from "@/store/AuthUser"
export default {
      data() {
            return {
                form:{
                    username: '',
                    email:'',
                    password:'',
                }
            }
        },
        methods:{
            async register(){
            //let res = await AuthService.register(this.form)
             let res = await AuthUser.dispatch('register', this.form)
            if(res.success){
                this.$swal("Register Success",`Welcome, ${res.user.username}`,"success")
                this.$router.push('/main')
            }
            else{
                this.$swal("Register Failed",res.message,"error")
            }
        }
    }
}
</script>

<style lang="scss" scoped>
      div {
        margin-bottom: 20px;
    }
</style>