<template>
  <div class="container my-3">
    <h1 class="display-4 ">Leaderboard</h1>
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created(){
    axios.get("http://localhost:1337/water-users").then((res) => {
      this.users = res.data;
      console.log(this.users);
      });
  },
  data() {
    return {
      headers: [
        {
          text: "Username",
          align: "start",
          sortable: false,
          value: "username",
        },
        { text: "Point", value: "point" },
        { text: "Point ที่ใช้", value: "pointUsed" },
      ],
      users: [],
    };
  },
};
</script>


<style>
h1{
  color:white;
  background-color: rgb(0, 0, 0);
}

</style>