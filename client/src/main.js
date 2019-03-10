import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import VueResource from 'vue-resource';
import App from './app.vue';
import Grid from './components/grid.vue';
import Edit from './components/edit.vue';
import Create from './components/create.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/bebidas', component: Grid },
    { path: '/bebidas/crear', component: Create },
    { path: '/bebidas/:id', component: Edit },
  ],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
