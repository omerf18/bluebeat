<template>
    <div class="header flex justify-center align-center space-between">
        <img class="beat-logo" src="@/assets/img/beatLogo.png" />
        <el-input type="text" placeholder="Serch for beat" prefix-icon="el-icon-search" v-model="genre" />
        
        <router-link to="/app">BEATS</router-link>
        <router-link to="/app/add"> CREATE BEAT</router-link>
    </div>
</template>



<script>
export default {
    name: "beatHeader",
    data(){
      return {
        genre:''
      }
    }
};
</script>