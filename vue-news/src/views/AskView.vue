<template>
    <div>
        <p v-for="item in this.ask" v-bind:key="item.title">
            <a :href="item.url"> {{ item.title }}</a>
            <small>{{ item.time_ago }} by {{ item.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState(['ask'])
    },
    created(){
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>