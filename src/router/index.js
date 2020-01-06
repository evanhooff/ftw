import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const DrummerWanted = () =>
  import( /* webpackChunkName: "DrummerWanted" */ "@/views/DrummerWanted.vue");

const FormSend = () =>
  import( /* webpackChunkName: "Form Send" */ "@/views/FormSend.vue");

let router = new VueRouter({
  routes: [{
      path: "/"
    }
  ]
});

export default router;