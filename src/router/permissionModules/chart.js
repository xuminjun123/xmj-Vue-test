/*
 * @Description: 
 * @param : 
 * @return: 
 * @Author: xmj
 * @Date: 2021-07-25 00:44:46
 */

import Layout from '@/layout/index.vue'

const chartsRouter  = [
  {
    path: '/charts',
    component: Layout,
    redirect: 'noredirect',
    name: 'Charts',
    meta: {
      title: '地图cahrts',
      // icon: '#iconchart1'
    },
    children: [
      {
        path: 'bar-chart',
        component: () =>
          import(
            '@/views/charts/BarChartDemo.vue'
          ),
        name: 'BarChartDemo',
        meta: {
          title: 'bar柱状',
          noCache: true
        }
      },
      {
        path: 'line-chart',
        component: () =>
          import(
            /* webpackChunkName: "LineChart" */ '@/views/charts/LineChartDemo.vue'
          ),
        name: 'LineChartDemo',
        meta: {
          title: 'line线状',
          noCache: true
        }
      },

      {
        path: 'line-chart2',
        component: () =>
          import(
            /* webpackChunkName: "LineChart" */ '@/views/charts/LineChartDemo2.vue'
          ),
        name: 'LineChartDemo2',
        meta: {
          title: 'line线状2',
          noCache: true
        }
      },

      {
        path: 'mixed-chart',
        component: () =>
          import(
            /* webpackChunkName: "MixedChat" */ '@/views/charts/MixedChatDemo.vue'
          ),
        name: 'MixedChartDemo',
        meta: {
          title: '混合Chart',
          noCache: true
        }
      },
      { 
        path: 'china-chart',
        component: () =>
          import(
            /* webpackChunkName: "MixedChat" */ '@/views/charts/ChinaChartDemo.vue'
          ),
        name: 'chinaChartDemo',
        meta: {
          title: '中国地图',
          noCache: true
        }
      }, 
      { 
        path: 'city-chart',
        component: () =>
          import(
            /* webpackChunkName: "MixedChat" */ '@/views/charts/CityChartDemo.vue'
          ),
        name: 'cityChartDemo',
        meta: {
          title: '省市地图',
          noCache: true
        }
      }, 
      {
        path: 'raddar-chart',
        component: () =>
          import(
            /* webpackChunkName: "MixedChat" */ '@/views/charts/RaddarChartDemo.vue'
          ),
        name: 'RaddarChartDemo',
        meta: {
          title: 'RaddarChartDemo',
          noCache: true
        }
      } 
    ]
  }
]

export default chartsRouter
