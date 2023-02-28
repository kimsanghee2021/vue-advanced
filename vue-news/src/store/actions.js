import { fetchNewsList, fetchAskList, fetchJobList, fetchUserInfo } from '@/api/index.js';

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
        fetchUserInfo(name)
        .then(({data})=>{
            commit('SET_USER',data)
        })
        .catch(error=>{console.log(error)});
    }
}