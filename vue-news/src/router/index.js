import Vue from 'vue'
import VueRouter from 'vue-router';

import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes : [
        {
            //path : url 주소
            // component : url 주소로 갔을 때 표시될 컴포넌트
            path :'./news',
            component : NewsView
        },
        {
            path :'./ask',
            component : AskView
        },
        {
            path :'./jobs',
            component : JobsView
        }
    ]
})

export default router