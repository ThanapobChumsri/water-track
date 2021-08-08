<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-3"> <!-- loop -->
        <p style="font-size: 64px">💧</p>
        <p>8/7/2021</p>
      </div>
    </div>
    <div class="mt-5" style="text-align:center">
      <button class="btn btn-success">เพิ่ม</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {},
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

<style>
</style>