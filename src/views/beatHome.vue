<template>
  <section class="home">
    <img class="beat-hero" src="@/assets/img/bluebeatHero.jpg" />
    <beat-home-list />
  </section>
</template>

<script>
import beatHomeList from "@/cmps/beatHomeList.vue";

export default {
  name: "Home",
  computed: {
    logcoChack() {
    return this.$store.getters.beats
    }
   },
  created() {
    this.$store.dispatch({type: 'loadBeats'})
    console.log(this.$store.getters.beats);
  },

  components: {
    beatHomeList,
  },
};
</script>

