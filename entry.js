import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import ComponentOne from './component1.vue'
import ComponentTwo from './component2.vue'

//Vue.component('component-one', ComponentOne)
Vue.use(VueRouter)

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/foo', component: ComponentOne },
  { path: '/bar', component: ComponentTwo }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')

// new Vue({
//     el: "#app",
//     data: {
//         greetings: "bonjour"
//     },
//     components: { ComponentOne, ComponentTwo }
// })