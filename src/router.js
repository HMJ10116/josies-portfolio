import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import('./frames/basic.vue'),
      // redirect: 
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('./views/home.vue')
        },
        {
          path: 'fundora',
          name: 'fundora',
          component: () => import('./views/uiux/fundora.vue')
        },
        {
          path: 'yes123',
          name: 'yes123',
          component: () => import('./views/uiux/yes123.vue')
        },
        {
          path: 'clinic',
          name: 'clinic',
          component: () => import('./views/uiux/clinic.vue')
        },
        {
          path: 'album',
          name: 'album',
          component: () => import('./views/visual/album.vue')
        },
        {
          path: 'chair',
          name: 'chair',
          component: () => import('./views/visual/chair.vue')
        },
        {
          path: 'business',
          name: 'business',
          component: () => import('./views/visual/business.vue')
        },
        {
          path: 'birdSong',
          name: 'birdSong',
          component: () => import('./views/jewelry/birdSong.vue')
        },
        {
          path: 'diff',
          name: 'diff',
          component: () => import('./views/jewelry/diff.vue')
        },
        {
          path: 'flowerDance',
          name: 'flowerDance',
          component: () => import('./views/jewelry/flowerDance.vue')
        },
        {
          path: 'jewelryDesign',
          name: 'jewelryDesign',
          component: () => import('./views/jewelry/jewelryDesign.vue')
        },
        {
          path: 'paperInk',
          name: 'paperInk',
          component: () => import('./views/jewelry/paperInk.vue')
        },
        {
          path: 'snake',
          name: 'snake',
          component: () => import('./views/jewelry/snake.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('./views/about.vue')
        },
        {
          path: '*',
          component: () => import('./views/home.vue')
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  /* must call `next` */
  window.scrollTo(0, 0);
  next()
})

export default router