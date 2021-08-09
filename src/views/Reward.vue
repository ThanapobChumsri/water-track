<template>
  <div>
    <div class="container my-3">
      <h1 class="display-4">Reward
      </h1>
      <p align="right" v-if="isAdmin()">
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
            <th v-if="isAdmin()" scope="col">Admin</th>
            <th v-if="isAdmin()" scope="col">Admin</th>
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
              <button class="btn btn-success" v-if="isAuthen()" @click="getReward(reward.id)">แลก</button>
            </td>
            <td>
              <button class="btn btn-warning" v-if="isAuthen() && isAdmin()" @click="editReward">แก้ไข</button>
            </td>
            <td>
              <button class="btn btn-danger" v-if="isAuthen() && isAdmin() " @click="deleteReward(reward.id)" >ลบ</button>
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
    isAdmin() {
      return AuthUser.getters.user.role.name == "admin";
    },
    editReward() {
      this.$router.push("/editreward");
    },
    deleteReward(id){
      axios.delete("http://localhost:1337/water-rewards/" + id)
      window.location.href = "http://localhost:8080/reward";
    },
    getReward(id) {
      let url = "http://localhost:1337/water-rewards/" + id;
      let payload = {
        name: this.data.name,
        price: this.data.price,
        remaining: this.number,
        desc: this.data.desc
      }
      axios.put(url, payload)
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