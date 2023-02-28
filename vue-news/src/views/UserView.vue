<template>
    <div>
        <p>{{ fetchedUser.id }}</p>
        <p>{{ fetchedUser.karma }}</p>
        <p>{{ fetchedUser.created }}</p>
    </div>
</template>

<script>

export default {
    computed:{
        fetchedUser(){
            return this.$store.state.user;
        }
    },  
    created(){
        //console.log(this.$route.params.id) - 라우터 아이디 값 불러오는 방법
        const userName = this.$route.params.id
        this.$store.dispatch('FETCH_USER', userName)
        
    }
}
</script>

<style>

</style>