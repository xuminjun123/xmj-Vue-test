/*
 * @Description:
 * @param :
 * @return:
 * @Author: xmj
 * @Date: 2021-05-28 09:51:54
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
const NotFound = () => import("@/views/NotFound.vue")
Vue.use(VueRouter);
const routes = [
  {
    path: "/index-home",
    name: "index-home",
    component: Home,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: "About",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dialog",
    name: "Dialog",
    meta: {
      title: "Dialog",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dialog.vue"),
  },
  {
    path: "/scroller",
    name: "Scroller",
    meta: {
      title: "Scroller",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Scroller.vue"),
  },
  {
    path: "/css",
    name: "css",
    meta: {
      title: "css",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Test.vue"),
  },
  {
    path: "/PublicFind",
    name: "PublicFind",
    meta: {
      title: "PublicFind",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PublicFind.vue"),
  },
  {
    path: "/Watch",
    name: "Watch",
    meta: {
      title: "Watch",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Watch.vue"),
  },
  {
    path: "/Watch2",
    name: "Watch2",
    meta: {
      title: "Watch2",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Watch2.vue"),
  },
  {
    path: "/Mounted",
    name: "Mounted",
    meta: {
      title: "Mounted",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Mounted.vue"),
  },
  {
    path: "/Params",
    name: "Params",
    meta: {
      title: "Params",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Params.vue"),
  },
  {
    path: "/Get",
    name: "Get",
    meta: {
      title: "Get",
    },
    component: () => import(/* webpackChunkName: "about" */ "../views/Get.vue"),
  },
  {
    path: "/IsMobile",
    name: "IsMobile",
    meta: {
      title: "IsMobile",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IsMobile.vue"),
  },
  {
    path: "/IfShort",
    name: "IfShort",
    meta: {
      title: "IfShort",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/IfShort.vue"),
  },
  {
    path: "/vuexActTest1",
    name: "vuexActTest1",
    meta: {
      title: "vuexActTest1",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vuexActTest1.vue"),
  },
  {
    path: "/vuexMulTest2",
    name: "vuexMulTest2",
    meta: {
      title: "vuexMulTest2",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/vuexMulTest2.vue"),
  },
  {
    path: "/LoadshTest",
    name: "LoadshTest",
    meta: {
      title: "LoadshTest",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoadshTest.vue"),
  },
  {
    path: "/KeepAlive",
    name: "KeepAlive",
    meta: {
      title: "KeepAlive",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/KeepAlive.vue"),
  },
  {
    path: "/CodeDemo",
    name: "CodeDemo",
    meta: {
      title: "CodeDemo",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CodeDemo.vue"),
  },
  {
    path: "/ForceUpdate",
    name: "ForceUpdate",
    meta: {
      title: "ForceUpdate",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ForceUpdate.vue"),
  },
  {
    path: "/Slot",
    name: "Slot",
    meta: {
      title: "Slot",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Slot.vue"),
  },
  {
    path: "/Moment",
    name: "Moment",
    meta: {
      title: "Moment",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Moment.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    meta: {
      title: "Login",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/Replace",
    name: "Replace",
    meta: {
      title: "Replace",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Replace.vue"),
  },
  {
    path: "/Istrue",
    name: "Istrue",
    meta: {
      title: "Istrue",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Istrue.vue"),
  },
  {
    path: "/Transition",
    name: "Transition",
    meta: {
      title: "Transition",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Transition.vue"),
  },
  {
    path: "/SwitchTest",
    name: "SwitchTest",
    meta: {
      title: "SwitchTest",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SwitchTest.vue"),
  },
  {
    path: "/BackTop",
    name: "BackTop",
    meta: {
      title: "BackTop",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BackTop.vue"),
  },

  {
    path: "/TabView",
    name: "TabView",
    meta: {
      title: "TabView",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TabView.vue"),
  },

  {
    path: "/Page1",
    name: "Page1",
    meta: {
      title: "Page1",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Page1.vue"),
  },
  {
    path: "/Page2",
    name: "Page2",
    meta: {
      title: "Page2",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Page2.vue"),
  },

  {
    path: "/Page3",
    name: "Page3",
    meta: {
      title: "Page3",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Page3.vue"),
  },

  {
    path: "/Select",
    name: "Select",
    meta: {
      title: "Select",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Select.vue"),
  },

  {
    path: "/Echarts",
    name: "Echarts",
    meta: {
      title: "Echarts",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Echarts.vue"),
  },

  {
    path: "/Exports",
    name: "Exports",
    meta: {
      title: "Exports",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/exports.vue"),
  },
  {
    path: "/Table",
    name: "Table",
    meta: {
      title: "Table",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Table.vue"),
  },
  {
    path: "/Tab",
    name: "Tab",
    meta: {
      title: "Tab",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Tab.vue"),
  },

  {
    path: "/Scroll",
    name: "Scroll",
    meta: {
      title: "Scroll",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Scroll.vue"),
  },
  {
    path: "/AudioTest",
    name: "AudioTest",
    meta: {
      title: "AudioTest",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AudioTest.vue"),
  },

  {
    path: "/ScssTest",
    name: "ScssTest",
    meta: {
      title: "ScssTest",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ScssTest.vue"),
  },
  {
    path: "/ComputedTest",
    name: "ComputedTest",
    meta: {
      title: "ComputedTest",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ComputedTest.vue"),
  },

  {
    path: "/LookDocument",
    name: "LookDocument",
    meta: {
      title: "LookDocument",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LookDocument.vue"),
  },
  {
    path: "/ESTest",
    name: "ESTest",
    meta: {
      title: "ESTest",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ESTest.vue"),
  },

  {
    path: "/ShowPwd",
    name: "ShowPwd",
    meta: {
      title: "ShowPwd",
    },
    component: () =>
      import(/* webpackChunkName: "ShowPwd" */ "../views/ShowPwd.vue"),
  },

  {
    path: "/redirect",
    // redirect:"/Table",
    redirect: {
      name: 'Table'
    }
  },
  {
    path: "/farm",
    name: "farm",
    redirect: '/cat',
    component: () => import('@/views/farm/index.vue'),
    children: [
      {
        path: '/cat',
        name: 'cat',
        props: true,  // 使用 props 解耦
        component: () => import('@/views/farm/cat/index.vue'),
        meta: {
          title: 'cat',
        }
      },
      {
        path: '/dog/:id',
        name: 'dog',
        props: true,  // 使用 props 解耦
        component: () => import('@/views/farm/dog/index.vue'),
        meta: {
          title: 'dog',
        }
      },
      {
        path: '/Props',
        name: 'Props',
        component: () => import('../views/Props.vue'),
        meta: {
          title: 'dog',
        }
      },
    ]
  },

  {
    path: "/Process",
    name: "Process",
    meta: {
      title: "Process",
    },
    component: () =>
      import(/* webpackChunkName: "Process" */ "../views/Process.vue"),
  },

  
  {
    path: "/Flex",
    name: "Flex",
    meta: {
      title: "Flex",
    },
    component: () =>
      import(/* webpackChunkName: "Process" */ "../views/Flex.vue"),
  },

  {
    path: "/oddVueDraggableTest",
    name: "oddVueDraggableTest",
    meta: {
      title: "oddVueDraggableTest",
    },
    component: () =>
      import(/* webpackChunkName: "oddVueDraggableTest" */ "../views/oddVueDraggableTest.vue"),
  },

  {
    path: "/EvenVueDraggableTest",
    name: "EvenVueDraggableTest",
    meta: {
      title: "EvenVueDraggableTest",
    },
    component: () =>
      import(/* webpackChunkName: "oddVueDraggableTest" */ "../views/EvenVueDraggableTest.vue"),
  },
  {
    path: "/Sort",
    name: "Sort",
    meta: {
      title: "Sort",
    },
    component: () =>
      import(/* webpackChunkName: "Sort" */ "../views/Sort.vue"),
  },

  {
    path: "/Transtion",
    name: "Transtion",
    meta: {
      title: "Transtion",
    },
    component: () =>
      import(/* webpackChunkName: "Transtion" */ "../views/Transtion.vue"),
  },

  {
    path: "/Toast",
    name: "Toast",
    meta: {
      title: "Toast",
    },
    component: () =>
      import(/* webpackChunkName: "Transtion" */ "../views/Toast.vue"),
  },

  // 全不匹配 情况下
  {
    path: "*",
    component: NotFound
  }
];

let r = [{
  path: "/AddRouterTest",
  name: "AddRouterTest",
  meta: {
    title: "AddRouterTest",
  },
  component: () =>
    import(/* webpackChunkName: "about" */ "@/views/AddRouterTest.vue"),
}];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

const flag = true;
// router gards
if (flag) {
  router.addRoutes(r)
}
export default router;
