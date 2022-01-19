<template>
  <div>
    <h1>Halaman Data</h1>
  </div>
</template>

<script>
import DataKatalog from "@/services/KatalogRoute";

export default {
  name: "KatalogData",

  data() {
    return {
      dataKatalog: [],
    };
  },

  created() {
    this.getCategoryKatalog();
  },

  methods: {
    getCategoryKatalog: async function () {
      try {
        const response = await DataKatalog.getCategoryKatalog();
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scope></style>
