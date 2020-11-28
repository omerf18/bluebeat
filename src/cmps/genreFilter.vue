<template>
  <div>
    <el-radio-group class="beat-filter" v-model="selectedGenre" @change="setGenreFilter">
      <el-radio class="filter-btn" value="ALL" label="ALL"></el-radio>
      <!-- <el-radio class="filter-btn" value="TRENDING"  label="TRENDING"></el-radio>
      <el-radio class="filter-btn" value="POPULAR"  label="POPULAR"></el-radio> -->
      <el-radio class="filter-btn" value="HIP HOP"  label="HIP HOP"></el-radio>
      <el-radio class="filter-btn" value="ISRAELI"  label="ISRAELI"></el-radio>
      <el-radio class="filter-btn" value="DANCE"  label="DANCE"></el-radio>
      <el-radio class="filter-btn" value="ROCK N ROLL"  label="ROCK N ROLL"></el-radio>
      <el-radio class="filter-btn" value="POP"  label="POP"></el-radio>
      <el-radio class="filter-btn" value="LATIN"  label="LATIN"></el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
      props:{
        
      },
    data () {
      return {
        selectedGenre:''
      };
    },
    methods:{
        setGenreFilter(){
            let genreFilterCopy =JSON.parse(JSON.stringify(this.selectedGenre));
            this.$emit("setGenre",genreFilterCopy)
           
        }
    },
    created(){
        this.selectedGenre = this.$store.getters.filterBy.genreFilter
        this.setGenreFilter()
    }
  }
</script>