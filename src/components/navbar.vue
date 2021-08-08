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
        <span class="navbar-text col-1"> POINT:1000 </span>
        <button @click="logout" class="btn btn-danger">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
import AuthService from '@/services/AuthServices'
export default {
  methods:{
    logout(){
      
      this.$swal("You really wanna leave?","Please confirm",{ icon:"warning",buttons:{Yes:true,cancel:"No"}, }).then(
        (logout) =>{
          if(logout){
            AuthService.logout()
            
            this.$swal("Logout Success","","success")
            this.$router.push('/login')
          }
        })
    
    },
  },
};
</script>

<style>
</style>