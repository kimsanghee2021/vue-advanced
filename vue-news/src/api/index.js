import axios from 'axios';

//1. HTTP Request & Response와 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
};

//2. API 함수들을 정리
function fetchNewsList(){
    //return axios.get(config.baseUrl + 'news/1.json')
    return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchAskList(){
    return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobList(){
    return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchUser(id){
    return axios.get(`${config.baseUrl}user/${id}.json`)
}
function fetchItem(id){
    return axios.get(`${config.baseUrl}item/${id}.json`)
}

export{
    fetchNewsList, 
    fetchJobList,
    fetchAskList,
    fetchUser,
    fetchItem
}