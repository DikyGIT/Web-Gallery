<template>
  <div class="home">
    <h1 class="title">Choose Your Category</h1>

    {{ dataCategory }}
    <!-- <div v-for="(data, index) in dataCategory" v-bind:key="index">
      {{ data }}
    </div> -->
  </div>
</template>

<script>
import KatalogHome from "@/services/KatalogRoute.js";

export default {
  name: "KatalogHome",

  data() {
    return {
      dataCategory: [],
    };
  },

  created() {
    this.getAllKatalog();
  },

  methods: {
    getAllKatalog: async function () {
      try {
        const response = await KatalogHome.getAllKatalog();
        const ubahToJSON = JSON.parse(response.data);
        console.log(ubahToJSON);
        // const datajson = response.data;
        // JSON.parse(response);
        // console.log(response.data);
        // this.dataCategory = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scope>
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  background-image: linear-gradient(to right bottom, #151605, #0f170a, #091710, #061714, #061617, #031a20, #041d2b, #0f1e34, #2b1f44, #4f1845, #6f0535, #810d17);
  color: white;
}

.home .title {
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  left: 50%;
  top: 15%;
  transform: translate(-50%, 0);
  font-weight: bold;
  text-shadow: 2px 2px 1px rgba(255, 255, 255, 0.37);
}
</style>
