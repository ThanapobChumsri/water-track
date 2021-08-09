<template>
  <div class="container my-5" style="overflow:scroll;">
    <div class="row">
      <div class="col-3 my-1" v-for="water in data" :key="water.id">
        <!-- loop -->
        <p style="font-size: 64px">💧</p>
        <p>{{ water.created_at }}</p>
      </div>
    </div>
    <div class="mt-5" style="text-align: center">
      <button v-if="isAuthen()" @click="addNewWater" class="btn btn-success">
        เพิ่ม
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AuthUser from "@/store/AuthUser";
export default {
  methods: {
    isAuthen() {
      return AuthUser.getters.isAuthen;
    },
    async addNewWater() {
      let user = JSON.parse(localStorage.getItem("auth-login"));
      let payload = {
        username: user.user.username,
        userid: user.user.id,
      };
      const temp = await axios.get(`http://localhost:1337/users/${user.user.id}`);
      let updatePayload = {
        point: temp.data.point + 10,
      };
      await axios.post("http://localhost:1337/waters", payload);
      await axios.put(
        `http://localhost:1337/users/${user.user.id}`,
        updatePayload
      );
      window.location.href = "http://localhost:8080/home";
    },
  },
  created() {
    let user = JSON.parse(localStorage.getItem("auth-login"));
    axios
      .get(`http://localhost:1337/waters?username=${user.user.username}`)
      .then((res) => {
        this.data = res.data;
      });
  },
  data() {
    return {
      data: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: 2px solid #000000;
  border-radius: 6px;
  padding: 20px 20px;
  margin-left: auto;
  margin-right: auto;
  margin: auto;
  background-color: rgb(255, 255, 255);
  background-size: cover;
  height: 70vh;
}
</style>>
