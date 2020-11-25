<template>
    <div class="header flex justify-center align-center space-between">
        <img class="beat-logo" src="@/assets/img/beatLogo.png" />
        <el-input class="header-search" type="text" placeholder="Serch for beat" prefix-icon="el-icon-search" v-model="genre" />
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
        genre:''
      }
    }
};
</script>