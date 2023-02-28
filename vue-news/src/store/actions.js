import { fetchNewsList, fetchAskList, fetchJobList, fetchUser, fetchItem } from '@/api/index.js';

export default{//비동기 실행 
    FETCH_NEWS({commit}){
        fetchNewsList()
        .then(({ data })=>{
            commit('SET_NEWS',data);
        })
        .catch(error=>{console.log(error)});
    },
    FETCH_ASK({commit}){
        fetchAskList()
        .then(({ data })=>{
            commit('SET_ASK',data);
        })
        .catch(error=> console.log(error));
    },
    FETCH_JOBS({commit}){
        fetchJobList()
        .then(({ data }) =>{
            commit('SET_JOB', data);
        })
        .catch(error=>{console.log(error)});
    },
    FETCH_USER({commit},name){
        fetchUser(name)
        .then((res)=>{
            commit('SET_USER',res.data)
        })
        .catch(error=>{console.log(error)});
    },
    FETCH_ITEM({commit},payload){
        fetchItem(payload)
        .then(({data})=>{
            commit('SET_ITEM',data)
        })
        .catch(error=>{console.log(error)})
    }
}