import Vue from 'vue'
import vuex from 'vuex';
import state from './states.js';
import mutations  from './mutations.js';
import actions  from './actions.js';
import getters from './getters.js';
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
    state,
    getters,
    mutations,
    actions,
});