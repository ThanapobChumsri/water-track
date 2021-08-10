<template>
  <div>
    <div class="container my-3" style="overflow:scroll;">
    <h1 class="display-4">History</h1>
    <table class="table my-3">
      <thead>
        <tr>
          <th scope="col">Username</th>
          <th scope="col">Desc</th>
          <th scope="col">Point</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="history in data" :key="history.id">
          <td>{{ history.username }}</td>
          <td>{{ history.desc }}</td>
          <td>{{ history.point }}</td>
          <td>{{ history.created_at }}</td>
        </tr>
      </tbody>
    </table>
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
body{
  background-image: url("../resources/bg.jpg");
  background-size: cover;
}
</style>>