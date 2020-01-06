import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const DrummerWanted = () =>
  import( /* webpackChunkName: "DrummerWanted" */ "@/views/DrummerWanted.vue");

const FormSend = () =>
  import( /* webpackChunkName: "Form Send" */ "@/views/FormSend.vue");

let router = new VueRouter({
  routes: [{
      path: "/",
      meta: {
        title: 'Foster the Wulff',
        metaTags: [
          {
            name: 'description',
            content: 'The wullf is sleeping now, please come back later.'
          },
          {
            property: 'og:description',
            content: 'The wullf is sleeping now, please come back later.'
          }
        ]
      }
    }
  ]
});

export default router;