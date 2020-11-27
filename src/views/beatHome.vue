<template>
  <section class="home">
    <img class="beat-hero" src="@/assets/img/bluebeatHero.jpg" />
    <section v-if="beats">
    <beat-home-list class="main-layout"  v-for="genre in genres"  :genre="genre" :beats="beats" :key="genre" 
    @filter="dispatchFilter"
    />
     </section>
  </section>
</template>

<script>
import beatHomeList from "@/cmps/beatHomeList.vue";

export default {
  name: "Home",
  methods:{
    dispatchFilter(selectedGenre) {
      console.log('genregenregenre',selectedGenre);
      this.$store.dispatch({
        type: 'setGenreFilter',
        selectedGenre,
      })
    } 
  },
  computed: {
     beats() {
      return this.$store.getters.beats
    },
     genres() {
      return this.$store.getters.genres
    },
   },
  created() {
    this.$store.dispatch({type: 'resetFilter'})    
  },
  components: {
    beatHomeList,
  },
}
</script>

