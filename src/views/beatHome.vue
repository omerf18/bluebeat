<template>
  <section class="home">
    <img class="beat-hero" src="@/assets/img/bluebeatHero.jpg" />
<<<<<<< HEAD
    <beat-home-list
      class="main-layout"
      v-for="genre in genres"
      :genre="genre"
      :beats="beats"
      :key="genre"
      @filter="dispatchFilter"
    />
=======
    <section v-if="beats">
    <beat-home-list class="main-layout"  v-for="genre in genres"  :genre="genre" :beats="beats" :key="genre" 
    @filter="dispatchFilter"
    />
     </section>
>>>>>>> 6bf1c0d4a60ca565938d520c5b5b61be09646e3f
  </section>
</template>

<script>
import beatHomeList from "@/cmps/beatHomeList.vue";

export default {
  name: "Home",
  methods: {
    dispatchFilter(selectedGenre) {
      console.log("genregenregenre", selectedGenre);
      this.$store.dispatch({
        type: "setGenreFilter",
        selectedGenre,
      });
    },
  },
  computed: {
    beats() {
      return this.$store.getters.beats;
    },
    genres() {
      return this.$store.getters.genres;
    },
<<<<<<< HEAD
  },
  created() {
    this.$store.dispatch({ type: "resetFilter" });
=======
   },
  created() {
    this.$store.dispatch({type: 'resetFilter'})    
>>>>>>> 6bf1c0d4a60ca565938d520c5b5b61be09646e3f
  },
  components: {
    beatHomeList,
  },
};
</script>

