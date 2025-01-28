import { createRouter, createWebHistory } from 'vue-router';

// Import views
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ProjectsView from '@/views/ProjectsView.vue';

const routes = [
  {path: '/', name: 'Home', component: HomeView},
  { path: '/portfolio-project/', name: 'PortfolioHomePage', component: HomeView },
  { path: '/portfolio-project/about', name: 'About', component: AboutView },
  { path: '/portfolio-project/projects', name: 'ProjectsPage', component: ProjectsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
