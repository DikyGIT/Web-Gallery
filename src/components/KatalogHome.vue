<template>
  <div>
    <h1>Halaman Category</h1>
    {{ dataCategory }}
    <!-- <div v-for="data in dataCategory" v-bind:key="data.id">
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
        const parsingstringify = JSON.stringify(response.data);
        const parsingjson = JSON.parse(JSON.parse(parsingstringify));
        console.log(parsingjson);

        // JSON.parse(response);
        this.dataCategory = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scope></style>
