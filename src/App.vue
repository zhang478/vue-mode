<template>
    <!-- <div>asdfasdfasdf</div> -->
    <div class="page page-current">
        <top-bar></top-bar>
        <router-view></router-view>
        <bottom-bar v-if="this.$route.path == '/'"></bottom-bar>
    </div>
</template>

<script>
    import TopBar from './component/common/TopBar.vue'
    import BottomBar from './component/common/BottomBar.vue'
    import store from './store/store.js'
    export default{
        data(){
            return{
                isIndex:''
            }
        },
        mounted:function(){
            this.isIndex = this.$route.path == '/'?true:false

        },
        created(){
            store.commit('increment')
            console.log(store.state.count)
        },
        components:{
            TopBar,
            BottomBar
        }
    }
</script>