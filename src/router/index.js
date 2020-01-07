import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const DrummerWanted = () =>
  import( /* webpackChunkName: "DrummerWanted" */ "@/views/DrummerWanted.vue");

const ComingSoon = () =>
  import( /* webpackChunkName: "ComingSoon" */ "@/views/ComingSoon.vue");

const FormSend = () =>
  import( /* webpackChunkName: "Form Send" */ "@/views/FormSend.vue");

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/"
    },
    {
      path: "/coming-soon",
      component: ComingSoon
    }
  ]
});

export default router;