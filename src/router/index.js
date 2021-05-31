import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sidemeasure',
    name: 'SideMeasure',
    component: () => import(/* webpackChunkName: "SideMeasure" */ '../views/SideMeasure.vue')
  },
  {
    path: '/chestmeasure',
    name: 'ChestMeasure',
    component: () => import(/* webpackChunkName: "ChestMeasure" */ '../views/ChestMeasure.vue')
  },
  {
    path: '/upchestmeasure',
    name: 'UpChestMeasure',
    component: () => import(/* webpackChunkName: "UpChestMeasure" */ '../views/UpChestMeasure.vue')
  },
  {
    path:'/chestshapes',
    name: 'ChestShapes',
    component: () => import(/* webpackChunkName: "ChestShapes" */ '../views/ChestShapes.vue')
  },
  {
    path:'/brandchoice',
    name: 'brandChoice',
    component: () => import(/* webpackChunkName: "ChestShapes" */ '../views/BrandChoice.vue')
  },
  {
    path:'/result',
    name: 'result',
    component: () => import(/* webpackChunkName: "Result" */ '../views/Result.vue')
  },
  {
    path:'/nosize',
    name: 'nosize',
    component: () => import(/* webpackChunkName: "NoSize" */ '../views/NoSize.vue')
  },
  {
    path:'/hadsize',
    name: 'hadsize',
    component: () => import(/* webpackChunkName: "HadSize" */ '../views/HadSize.vue')
  },
  {
    path:'/fitbar',
    name: 'fitbar',
    component: () => import(/* webpackChunkName: "FitBar" */ '../views/FitBar.vue')
  },
  {
    path:'/cupfit',
    name: 'cupfit',
    component: () => import(/* webpackChunkName: "CupFit" */ '../views/CupFit.vue')
  },
  {
    path:"/furu",
    name:'furu',
    component: () => import(/* webpackChunkName: "FuRu" */ '../views/FuRu.vue')
  },
  {
    path:"/jixiong",
    name:'jixiong',
    component: () => import(/* webpackChunkName: "JiXiong" */ '../views/JiXiong.vue')
  },
  {
    path:"/backfit",
    name:'backfit',
    component: () => import(/* webpackChunkName: "JiXiong" */ '../views/BackFit.vue')
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
