<template>
    <div class="header flex justify-center align-center space-between">
        <img class="beat-logo" src="@/assets/img/beatLogo.png" @click="backHome" />
        <form @submit.prevent="searchBeat">
        <el-input class="header-search" type="text" placeholder="Serch for beat" prefix-icon="el-icon-search" v-model="beatToSearch"  />
        </form>
        <div class="flex justify-center align-center space-between">
        <router-link class="header-btn" to="/app">BEATS ||</router-link>
        <router-link class="header-btn" to="/app/add">  CREATE BEAT</router-link>
        </div>
        <div>
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
    </div>
</template>



<script>
export default {
    name: "beatHeader",
    data(){
      return {
        genre:'',
        beatToSearch: ''
      }
    },
        methods:{
          backHome(){
            this.$router.push("/")
          },
          searchBeat() {
            console.log(this.beatToSearch);
             this.$store.dispatch({
                type: 'setTxtFilter',
                txt: this.beatToSearch
            })
            this.$router.push('/app')
          }
      //      dispatchFilter(selectedGenre) {
      // console.log('genregenregenre',selectedGenre);
      // this.$store.dispatch({
      //   type: 'setGenreFilter',
      //   selectedGenre,
      // })
        }
};
</script>