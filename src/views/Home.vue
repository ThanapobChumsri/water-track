<template>
  <div class="container my-5 ">
    <div class="row ">
      <div class="col-3 my-1"> <!-- loop -->
        <p style="font-size: 64px ">💧</p>
        <p>8/7/2021</p>

      </div>
    </div>
    <div class="mt-5" style="text-align:center ">
      <button v-if="isAuthen()" class="btn btn-success">เพิ่ม</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AuthUser from "@/store/AuthUser"
export default {
  methods: {
    isAuthen() {
      return AuthUser.getters.isAuthen
    },
  },
  created() {
    axios.get("http://localhost:1337/water-histories").then((res) => {
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

<style lang="scss" scoped>
.container{
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
