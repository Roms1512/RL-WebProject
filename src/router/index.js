import { createRouter, createWebHistory } from 'vue-router'
import Acceuil from '../views/Acceuil'
import Service from '../views/Service'
import Portefolio from '../views/Portefolio'
import Contact from '../views/Contact'
import Mentions from '../views/Mentions'

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: Acceuil
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
  },
  {
    path: '/mentions',
    name: 'Mentions',
    component: Mentions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
