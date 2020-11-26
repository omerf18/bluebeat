<template>
  <section class="home">
    <img class="beat-hero" src="@/assets/img/bluebeatHero.jpg" />
    <!-- <template v-for="genre in genres"> -->
    <!-- <beat-home-list   :genre="genre" :beats="beats" :key="genre" /> -->
    <beat-home-list class="main-layout" v-for="genre in genres"  :genre="genre" :beats="beats" :key="genre" />
    <!-- </template> -->
  </section>
</template>

<script>
import beatHomeList from "@/cmps/beatHomeList.vue";

export default {
  name: "Home",

  computed: {
     beats() {
      return this.$store.getters.beats
    },
     genres() {
      return this.$store.getters.genres
    },
   },
  created() {
    this.$store.dispatch({type: 'loadBeats'})
  },
  components: {
    beatHomeList,
  },
}
</script>

