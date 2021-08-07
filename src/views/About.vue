<template>
  <div class="container">
      <h1>about</h1>
      <div v-for="user in data" :key="user.id" class = "my-5 card" >
        <p>{{user.username}}</p>
        <p>{{user.role}}</p>
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods:{

  },
  created(){
    axios.get("http://localhost:1337/water-users").then((res) => {
      this.data = res.data
      console.log(this.data);
    })
  },
  data(){
    return {
      data:[]
    };
  }

}
</script>

<style>

</style>