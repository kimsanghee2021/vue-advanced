<template>
    <div>
        <div v-for="user in users" v-bind:key="user.title">{{ user.title }}</div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            users :[]
        }
    },
    created(){
        // fetchNewsList()
        //     .then(response => this.users = response.data )
        //     .catch((error)=>console.log(error));
        this.$store.dispatch('FETCH_NEWS');

    }
} 
</script>

<style>

</style>