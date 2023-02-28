export default{//동기 실행, state 변경 
    SET_NEWS(state, data){
        state.news = data;
    },
    SET_ASK(state, data){
        state.ask = data;
    },
    SET_JOB(state, data){
        state.job = data;
    },
    SET_USER(state,data){
        state.user = data;
    },
    SET_ITEM(state, data){
        state.item = data
    }
}
