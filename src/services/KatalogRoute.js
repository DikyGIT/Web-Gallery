import Api from "@/services/Api";

export default {
  getAllKatalog(params) {
    return Api().get("/", params);
  },
  getCategoryKatalog(params) {
    return Api().get("/:directory", params);
  },
};
