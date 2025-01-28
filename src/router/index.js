import { createRouter, createWebHistory } from 'vue-router';

// Import views
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ProjectsView from '@/views/ProjectsView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
];

const router = createRouter({
  history: createWebHistory('/portfolio-project/'),
  routes,
});

export default router;
