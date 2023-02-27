import { fetchNewsList, fetchAskList, fetchJobList } from '@/api/index.js';

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
    }
}