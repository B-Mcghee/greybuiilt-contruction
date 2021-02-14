import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import ProjectListItem from '../components/ProjectListItem.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: () => { return import ('../pages/About.vue')}
    },
    {
      path: '/projects',
      name: 'Project',
      component: () => { return import ('../pages/Project.vue')}
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => { return import ('../pages/Contact.vue')}
    },
    {
      path:'/project/:id',
      name:'SingleProject',
      component: ProjectListItem,
      props: true
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => { return import ('@/Admin/Admin.vue')}
    }
  ]
})
