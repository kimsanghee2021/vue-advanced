<template>
    <div>
        <p v-for="work in fetchedJobs" v-bind:key="work.title">
            <a :href="work.url">{{ work.title }}</a>
            <small>{{ work.time_ago }} by {{ work.domain }}</small>
        </p>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(['fetchedJobs'])
        /* 
            store에서 데이터를 가져올 수 있는 방법
            #3
            ...mapGetters({fetchedAsk : 'fetchedAsk' })

            #2
            ...mapState(){
                fetchedAsk : state => state.ask
            }
        
            #1
            ask(){
                return this.$store.state.ask;
            }
        */
    },
    created(){
        this.$store.dispatch('FETCH_JOBS')
    }
}
</script>

<style>

</style> 