<template>
  <section class="main-list">
    <div class="flex space-between">
      <h2 class="" >{{ genre }}</h2>
      <h5 @click="showBeatsByGener" >SEE ALL</h5>
    </div>
      <!-- <beat-list :beats="beats" /> -->
      <beat-list :beats="beatsToShow" />
      <!-- <beat-list :beats="beats" /> -->
      <!-- </template> -->
  </section>
</template>

<script>
// import beatList from "@/cmps/beatList.vue";
import beatList from '../cmps/beatList.vue'
export default {
  name: "beatHomeList",
  props: {
    beats: Array,
    genre: String
    // categories: Array
  },
  data() {
      return{
       
      }
  },
   computed: {
     beatsToShow() {
      const beatsByGenres =  this.beats.filter(beat => beat.genre.toLowerCase() === this.genre.toLowerCase())
         return beatsByGenres
     }
  },
  methods: {
    showBeatsByGener(){
      console.log(this.beats);
      console.log(this.genre);
       this.$router.push('/app')
    }
  },
  created() {
  
  },
  components: {
    beatList,
  },
};
</script>
