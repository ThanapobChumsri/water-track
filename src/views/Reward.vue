<template>
  <div>
    <div class="container my-3">
      <h1 class="display-4">Reward
      </h1>
      <p align="right">
        <a class="btn btn-primary" v-if="isAuthen()" href="/addreward" role="button">AddReward</a>
      </p>

      <table class="table my-3">
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Name</th>
            <th scope="col">Point</th>
            <th scope="col">Remaining</th>
            <th scope="col">Description</th>
            <th scope="col">#####</th>
            <th scope="col">Admin</th>
            <th scope="col">Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reward in data" :key="reward.id">
            <td>{{reward.id}}</td>
            <td>{{ reward.name }}</td>
            <td>{{ reward.price }}</td>
            <td>{{reward.remaining}}</td>
            <td>{{ reward.desc }}</td>
            <td>
              <button class="btn btn-success" v-if="isAuthen()" >แลก</button>
            </td>
            <td>
              <button class="btn btn-warning" v-if="isAuthen()" @click="editReward">แก้ไข</button>
            </td>
            <td>
              <button class="btn btn-danger" v-if="isAuthen()" >ลบ</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import AuthService from '@/services/AuthServices'
import AuthUser from "@/store/AuthUser"
export default {
  methods: {
    isAuthen() {
      //return AuthService.isAuthen()
      return AuthUser.getters.isAuthen
    },
    editReward() {
      this.$router.push("/editreward");
    },
    deleteReward(event){
      myid = event.currentTarget.getAttribute("id")
      console.log(myid)
     // this.$$router.delete("/water-rewards/" + myid)
    }
  },
  created() {
    axios.get("http://localhost:1337/water-rewards").then((res) => {
      this.data = res.data;
      console.log(this.data);
    });
  },
  data() {
    return {
      data: [],
    };
  },
};
</script>

<style>
.container{
   font-family: "Yomogi", sans-serif;
        padding: 20px 20px;
        text-align: center;
        margin-bottom: 30px;
        height: 100vh;
        background-color: white;
        border: 2px solid #000000;
        border-radius: 6px;
}
</style>