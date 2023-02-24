import Vue from 'vue'
import vuex from 'vuex';
import { fetchNewsList } from '@/api/index.js';

Vue.use(vuex);

export const store =  new vuex.Store({
    state:{
        news:[]
    },
    actions:{
        FETCH_NEWS(){
            fetchNewsList()
            .then(response=>{
                console.log(response.data)
                
            })
            .catch(error=>{
                console.log(error)
            });
        }
    }
});