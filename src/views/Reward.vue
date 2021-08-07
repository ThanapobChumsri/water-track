<template>
  <div>
    <div class="container my-3">
      <h1 class="display-4">Reward</h1>
      <p align="right">
        <a class="btn btn-primary" href="/addreward" role="button">AddReward</a>
      </p>

      <table class="table my-3">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Remaining</th>
            <th scope="col">Description</th>
            <th scope="col">#####</th>
            <th scope="col">Admin</th>
            <th scope="col">Admin</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reward in data" :key="reward.id">
            <td>{{ reward.name }}</td>
            <td>{{ reward.price }}</td>
            <td>{{reward.remaining}}</td>
            <td>{{ reward.desc }}</td>
            <td>
              <button class="btn btn-success">แลก</button>
            </td>
            <td>
              <button class="btn btn-warning">แก้ไข</button>
            </td>
            <td>
              <button class="btn btn-danger">ลบ</button>
            </td>
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
</style>