<template>
    <div>
        <p>name : {{ fetchUser.id }}</p>
        <p>karma : {{ fetchUser.karma}}</p>
        <p>created : {{ fetchUser.created }}</p>
    </div>
</template>

<script>


export default {
    computed:{
        fetchUser(){
            return this.$store.state.user;
        }
    },
    created(){
        //console.log(this.$route.params.id); router id 호출
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style>

</style>