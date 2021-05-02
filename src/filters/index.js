import Vue from "vue";
import dayjs from "dayjs";

Vue.filter("formatDate", function (value) {
  return dayjs(value).format("YYYY-MM-DD HH:mm:ss");
});
