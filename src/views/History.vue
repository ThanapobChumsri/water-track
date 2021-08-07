<template>
  <div>
    <div class="container my-3">
    <h1 class="display-4">History</h1>
    <table class="table my-3">
      <thead>
        <tr>
          <th scope="col">Desc</th>
          <th scope="col">Type</th>
          <th scope="col">Point</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="history in data" :key="history.id">
          <td>{{ history.desc }}</td>
          <td>{{ history.type }}</td>
          <td>{{ history.point }}</td>
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
</style>