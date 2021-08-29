import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/Home.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始",
    }
  },
  {
    path: '/share',
    name: 'Share',
    //component: () => import(/* webpackChunkName: "Share" */ '../views/Share.vue'),
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/Share.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始",
    }
  },
  {
    path: '/err',
    name: 'Err',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/Err.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始",
    }
  },
  {
    path: '/personal',
    component:() => import(/* webpackChunkName: "TXNMeasure" */ '../views/Personal.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始",
    },
    children: [
      {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          name: 'Personal',
          path: '',
          component:()=> import(/* webpackChunkName: "TXNMeasure" */ '../views/PersonalMain.vue'),
          meta:{
            title:"发现自己，从一件不敷衍的甜小内开始",
          },
        },
      {

          name:"BaseData",
          path: 'basedata',
          component:() => import(/* webpackChunkName: "TXNMeasure" */ '../views/BaseData.vue'),
          meta:{
            title:"发现自己，从一件不敷衍的甜小内开始",
          },
        },
        {
          name:'BodyData',
          path: 'bodydata',
          component:() => import(/* webpackChunkName: "TXNMeasure" */ '../views/BodyData.vue'),
          meta:{
            title:"发现自己，从一件不敷衍的甜小内开始",
          },
        }
    ]
  },

  {
    path: '/login',
    name: 'Login',
    component:() => import(/* webpackChunkName: "TXNMeasure" */ '../views/Login.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path: '/chestmeasure',
    name: 'ChestMeasure',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/ChestMeasure.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path: '/upchestmeasure',
    name: 'UpChestMeasure',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/UpChestMeasure.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path:'/backfit',
    name:'BackFit',
    component:()=>import(/* webpackChunkName: "TXNMeasure" */ '../views/BackFit.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path:'/wk',
    name:'wk',
    component:()=>import(/* webpackChunkName: "TXNMeasure" */ '../views/WK.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path:'/chestshapes',
    name: 'ChestShapes',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/ChestShapes.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path:'/brandchoice',
    name: 'BrandChoice',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/BrandChoice.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path:'/result',
    name: 'Result',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/Result.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path:'/nosize',
    name: 'nosize',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/NoSize.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path:'/txnsize',
    name: 'txnsize',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/TxnSize.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path:'/hadsize',
    name: 'hadsize',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/HadSize.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path:'/fitbar',
    name: 'fitbar',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/FitBar.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path:'/cupfit',
    name: 'cupfit',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/CupFit.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },
  {
    path:"/furu",
    name:'furu',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/FuRu.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },//import Home from '../views/Home.vue'
  {
    path:"/jixiong",
    name:'jixiong',
    component: () => import(/* webpackChunkName: "TXNMeasure" */ '../views/JiXiong.vue'),
    meta:{
      title:"发现自己，从一件不敷衍的甜小内开始"
    }
  },

]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//token验证
  router.beforeEach((to, from, next) => {
    //路由发生改变时,触发

    window.document.title = to.meta.title == undefined ? '默认标题' : to.meta.title
    let token=window.localStorage.getItem("x-token")
        if (token){
          if (to.name!="Personal"){
            next()
          }else{
            Vue.axios.get("https://www.tianxiaonei.com/wx/filter/index.php",{
              headers:{
                "x-token":token
              }
            }).then(data=>{
              let res=data.data
              if (res.code=="200"){
                next()
              }else{
                next({name:"Login"})
              }
            }).catch(err=>{
              store.dispatch('commitgeterr',err)
                next({name:'Err'})
            })
          }
        }else{
          if(to.name=="Login"||to.name=="Home"||to.name=="Err"){
            next()
          }else{
            if(from.name=='Home'){
              next({name:'Login'})
            }else{
              next({name:'Home'})
            }
          }
        }
})
export default router
