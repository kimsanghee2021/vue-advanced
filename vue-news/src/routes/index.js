import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            path :'/',
            //바로 호출할 페이지 링크 연결 = redirect
            redirect:'/news'
        },
        {
            //path : url 주소
            // component : url 주소로 갔을 때 표시될 컴포넌트
            path :'/news',
            name:'NewsView',
            component : ()=> import('@/views/NewsView.vue')
        },
        {
            path :'/ask',
            name:'AskView',
            component: () => import('@/views/AskView.vue'),
        },
        {
            path :'/jobs',
            name:'JobsView',
            component : () => import('@/views/JobsView.vue'),
        },
        {
            path : '/user/:id',
            name : 'UserView',
            component : () => import('@/views/UserView.vue'),
        },
        {
            path : '/item/:id',
            name:'ItemView',
            component : ()=>import('@/views/ItemView.vue'),
        }
    ]
})
