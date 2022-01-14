import Api from "@/services/Api";

export default {
  getAllKatalog(params) {
    return Api().get("/", params);
  },
};
