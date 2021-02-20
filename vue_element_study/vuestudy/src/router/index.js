import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Input from '@/components/Input'
import Cascader from '@/components/Cascader'
import Index from '@/components/Index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Router)
Vue.use(ElementUI);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
        {
            path:'/hello',
            name: 'Hello',
            component: HelloWorld
        },
    {
        path:'/input',
        name: 'Input',
        component: Input
    },
    {
            path: '/cascader',
            name: 'Cascader',
            component:Cascader
    }
  ]
})
