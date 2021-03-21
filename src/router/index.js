import Vue from 'vue';
import VueRouter from 'vue-router';
import EditCard from '@/views/EditCard.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/edit/:id',
    name: 'EditCard',
    component: EditCard,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
