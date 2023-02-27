import Vue from 'vue'
import vuex from 'vuex';
import mutations  from './mutations';
import actions  from './actions';
Vue.use(vuex);


//vuex 순서 
/*
state : 단일 객체 상태 값
mutaion : state 값 변경 (commit메서드로 핸들러 호출)
actions : backend api 에서 호출 하는 곳 
    1. backend API 호출 
    2.

*/
export const store =  new vuex.Store({
    state:{ //공통으로 사용할 변수 모음
        news:[],
        ask:[],
        job:[]
    },
    mutations,
    getters :{
        fetchedJobs(state){
            return state.job;
        },
        fetchedNews(state){
            return state.news;
        }
    },
    actions,
});