<template>
      <div class="vue-tempalte">
            <form>
                  <h3>Sign Up</h3>

                  <div class="form-group">
                  <label>Full Name </label>
                  <input type="text" class="form-control form-control-lg" v-model="form.name">
                  </div>

                  <div>
                  <label>Email address </label>
                  <input type="email" class="form-control form-control-lg" v-model="form.email">
                  </div>

                  <div>
                  <label>Password </label>
                  <input type="password" class="form-control form-control-lg" v-model="form.password">
                  </div>

                  <button type="submit" class="btn btn-dark btn-lg btn-block" @click="addDataRegister">Sign Up</button>

                  <p class="forgot-password text-right">
                  Already registered 
                  <router-link to="/login">sign in?</router-link>
                  </p>
            </form>
      </div>
</template>

<script>
import dataStore from '@/store/data'
export default {
      data() {
            return {
                form:{
                    name: '',
                    email:'',
                    password:'',
                    
                }
            }
        },
        methods:{
            addDataRegister(){
            let payload = {
                name: this.form.name,
                email: this.form.email,
                password: this.form.password,
            }
            dataStore.dispatch('addDataRegister', payload)
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