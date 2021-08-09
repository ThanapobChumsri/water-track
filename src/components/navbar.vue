<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand">
        <img src="../resources/water_64px.png" alt="" width="30" height="24" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/reward">Reward</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/history">History</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/leaderboard">Leaderboard</a>
          </li>
        </ul>
        <span class="navbar-text col-1" v-if="isAuthen()" > POINT:{{this.point}} </span>
        <button @click="login" v-if="!isAuthen()" class="btn btn-success">Login</button>
        <button @click="logout" v-if="isAuthen()" class="btn btn-danger">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
//import AuthService from '@/services/AuthServices'
import AuthUser from "@/store/AuthUser"
import axios from "axios";
export default {
  methods:{
    isAuthen() {
      return AuthUser.getters.isAuthen
    },
    logout(){
      this.$swal("You really wanna leave?","Please confirm",{ icon:"warning",buttons:{Yes:true,cancel:"No"}, }).then(
        (logout) =>{
          if(logout){
            //AuthService.logout()
            AuthUser.dispatch('logout')
            this.$swal("Logout Success","","success")
            this.$router.push('/login')
          }
        })
    },
    login(){
      this.$router.push('/login')
    }
  },
  created() {
    let user = JSON.parse(localStorage.getItem("auth-login"));
    axios.get(`http://localhost:1337/users/${user.user.id}`).then((res)=>{
      this.point = res.data.point
    })
},
  data() {
    return {
      point: 0,
    };
  },
};
</script>

<style>
.navbar{
        border: 1px solid #000000;
        border-radius: 6px;
        padding: 20px 20px, 20px,20px;
        margin: 2px;
}
</style>