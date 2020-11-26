<template>
  <section class="home">
    <img class="beat-hero" src="@/assets/img/bluebeatHero.jpg" />
    <!-- <template v-for="genre in genres"> -->
    <!-- <beat-home-list   :genre="genre" :beats="beats" :key="genre" /> -->
    <beat-home-list class="main-layout" v-for="genre in genres"  :genre="genre" :beats="beats" :key="genre" 
    @filter="dispatchFilter"
    />
    <!-- </template> -->
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
    //  beatsToDisplay() {
    //   return this.$store.getters.genres
    // },
   },
  created() {
    this.$store.dispatch({type: 'resetFilter'})
    // this.$store.dispatch({type: 'loadBeats'})
    //  this.$store.dispatch({
    //     type: 'setGenreFilter',
    //     selectedGenre: 'All',
    //   })
    
  },
  components: {
    beatHomeList,
  },
}
</script>

