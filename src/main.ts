import "./styles.css";
import Vue from "vue";
import App from "./app.vue";

const container = document.createElement("div");
console.log(container);
document.body.appendChild(container);
/* eslint-disable no-new */
console.log(App);
new Vue({
  el: container,
  components: { App },
  template: "<App/>",
});
