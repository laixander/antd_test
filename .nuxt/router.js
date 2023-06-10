import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e6bb2dc0 = () => interopDefault(import('..\\pages\\leaves.vue' /* webpackChunkName: "pages/leaves" */))
const _50aadeb6 = () => interopDefault(import('..\\pages\\overtime.vue' /* webpackChunkName: "pages/overtime" */))
const _01fe58de = () => interopDefault(import('..\\pages\\timesheet.vue' /* webpackChunkName: "pages/timesheet" */))
const _67c9ce04 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/leaves",
    component: _e6bb2dc0,
    name: "leaves"
  }, {
    path: "/overtime",
    component: _50aadeb6,
    name: "overtime"
  }, {
    path: "/timesheet",
    component: _01fe58de,
    name: "timesheet"
  }, {
    path: "/",
    component: _67c9ce04,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
