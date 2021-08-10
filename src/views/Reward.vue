<template>
  <div>
    <div class="container my-3" style="overflow:scroll;">
      <h1 class="display-4">Reward
      </h1>
      <p align="right" v-if="isAuthen() && isAdmin()">
        <a class="btn btn-primary" href="/addreward" role="button">AddReward</a>
      </p>

      <table class="table my-3">
        <thead>
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Name</th>
            <th scope="col">Point</th>
            <th scope="col">Remaining</th>
            <th scope="col">Description</th>
            <th v-if="isAuthen()" scope="col">#####</th>
            <th v-if="isAuthen() && isAdmin()" scope="col">Admin</th>
            <th v-if="isAuthen() && isAdmin()" scope="col">Admin</th>
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
      return AuthUser.getters.user.role.type == "admin";
    },
    editReward() {
      this.$router.push("/editreward");
    },
    async deleteReward(id){
      await axios.delete("http://localhost:1337/water-rewards/" + id)
      window.location.href = "http://localhost:8080/reward";
    },
async getReward(id) {
      let user = JSON.parse(localStorage.getItem("auth-login"));
      let myUser;
      await axios.get(`http://localhost:1337/users/${user.user.id}`).then((res)=>{
       myUser = res.data
    })
      
      let url = "http://localhost:1337/water-rewards/" + id;
      
      const temp = await axios.get(url)
      
      if(temp.data.remaining == 0){
        this.$swal("Out of stock","Sorry","error")
        return;
      }
      if(myUser.point < temp.data.price){
        this.$swal("Not enough point","Please check you point","error")
        return;
      }
      let updatePayload = {
        remaining: temp.data.remaining - 1
      }
      await axios.put(url, updatePayload)

      let payload = {
        point: temp.data.price,
        desc: temp.data.name,
        username: myUser.username
      }
      await axios.post("http://localhost:1337/water-histories/", payload)
      console.log(user.user.point);
      let setpoint = {
        point: myUser.point -= temp.data.price,
        pointUsed: myUser.pointUsed + temp.data.price
      }
      await axios.put("http://localhost:1337/users/" + user.user.id, setpoint)
      window.location.href = "http://localhost:8080/reward";
    }
  },
  async created() {
    await axios.get("http://localhost:1337/water-rewards").then((res) => {
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