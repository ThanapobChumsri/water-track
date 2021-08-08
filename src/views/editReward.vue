<template>
    <div class="container mt-2">
    <div class="mt-5">
      <input
        class="form-control"
        type="text"
        placeholder="Number"
        aria-label="default input example"
        v-model="form.id"
      />
    </div>
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
        placeholder="Point"
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
        <a @click="editReward" class="btn btn-primary" href="/reward" role="button">Edit</a>
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
        id: "",
        Name: "",
        Price: "",
        Remaining: "",
        Description: ""
      }
    }
  },
  methods: {
    editReward() {
        let payload = {
            name: this.form.Name,
            price: this.form.Price,
            remaining: this.form.Remaining,
            desc: this.form.Description
        }

        let url = "http://localhost:1337/water-rewards/" + this.form.id
        axios.put(url, payload).then((res) => {
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