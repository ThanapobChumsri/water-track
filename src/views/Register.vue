<template>
      <div class="vue-tempalte my-5">
            <form @submit.prevent="register">
                <div class="-h3 ">
                     <h3>Sign Up</h3>
                </div>
                  

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

                  <button type="submit" class="btn btn-info btn-lg btn-block mb-1">Sign Up</button>

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

      .vue-tempalte{
        background-color: white;
        border: 2px solid #000000;
        border-radius: 6px;
        padding: 20px 20px;
      }
      div {
        margin-left: auto;
        margin-right: auto;
        max-width: 300px;
        margin-bottom: 20px;
    }
        h3{
        font-size: 40px;
        color: rgb(0, 0, 0);
        text-align: center;
        background-color:rgb(4, 209, 245);
        background-size: c;
        background-size: cover;
        margin-bottom: 30px;
    }
</style>