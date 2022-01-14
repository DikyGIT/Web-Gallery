<template>
  <div>
    <h1>Halaman Home</h1>
    {{ data }}
  </div>
</template>

<script>
import KatalogHome from "@/services/KatalogRoute.js";

export default {
  name: "KatalogHome",

  data() {
    return {
      data: [],
    };
  },

  created() {
    this.getAllKatalog();
  },

  methods: {
    getAllKatalog: async function () {
      try {
        const res = await KatalogHome.getAllKatalog();
        console.log(res);
        this.data = res.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scope></style>
