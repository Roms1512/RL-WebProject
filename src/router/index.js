import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Accueil'
import Service from '../views/Service'
import Portefolio from '../views/Portefolio'
import Contact from '../views/Contact'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Service',
    component: Service
  },
  {
    path: '/portefolio',
    name: 'Portefolio',
    component: Portefolio
  }, 
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
