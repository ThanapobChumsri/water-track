<template>
  <div class="container mt-2">
    <div class="mt-5">
      <input
        class="form-control"
        type="text"
        placeholder="Name"
        aria-label="default input example"
        v-model="form.Name"
      />
    </div>
    <div class="mt-5">
      <input
        class="form-control"
        type="text"
        placeholder="Price "
        aria-label="default input example"
        v-model="form.Price"
      />
    </div>
    <div class="mt-5">
      <input
        class="form-control"
        type="text"
        placeholder="Remaining"
        aria-label="default input example"
        v-model="form.Remaining"
      />
    </div>
    <div class="mt-5">
      <input
        class="form-control"
        type="text"
        placeholder="Description"
        aria-label="default input example"
        v-model="form.Description"
      />
    </div>
    <div class="mt-5">
      <p align="center">
        <a @click="addReward" class="btn btn-primary" href="#" role="button">Add</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        Name: "",
        Price: "",
        Remaining: "",
        Description: ""
      }
    }
  },
  methods: {
    addReward() {
      let payload = {
        name: this.form.Name,
        price: this.form.Price,
        remaining: this.form.Remaining,
        desc: this.form.Description
      }

      axios.post("http://localhost:1337/water-rewards", payload).then((res) => {
        if (res.status ===200) {
            return {
              success: true,
              data: res.data
            }
          } 
        else {
        console.error(res)
        return {
          success: true,
          message: "Unknown status code: " + res.status
        }
      }
      });
    }
  }
};
</script>

<style>
</style>