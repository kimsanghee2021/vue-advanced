<template>
    <div>
        <div v-for="work in works" v-bind:key="work.title">{{ work.title }}</div>
    </div>
</template>

<script>
import { fetchJobList } from '../api/index.js';

export default {
    data(){
        return{
            works : []
        }
    },
    created(){
        fetchJobList()
        .then(response => this.works = response.data)
        .catch(error=>{console.log(error)});

    }
}
</script>

<style>

</style>