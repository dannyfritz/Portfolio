import "./reset.css";
import "./styles.css";
import Vue from "vue";
import App from "./components/app.vue";
import data from "./assets/data.json";

const container = document.createElement("div");
document.body.appendChild(container);
/* eslint-disable no-new */
new Vue({
  el: container,
  components: { App },
  data: {
    bio: data.bio,
    games: data.games,
    sites: data.sites,
    applications: data.applications,
  },
  template: `<App :games="games" :sites="sites" :applications="applications" :bio="bio" />`,
});
