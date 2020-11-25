<template>
<<<<<<< HEAD
  <div class="home">
    <h1>
      {{logcoChack}}
    </h1>
  </div>
=======
  <section class="home">
    <img class="beat-hero" src="@/assets/img/bluebeatHero.jpg" />
    <beat-home-list />
  </section>
>>>>>>> d4350566dbd9ac5c59d8864c624d80a3d59189b7
</template>

<script>
import beatHomeList from "@/cmps/beatHomeList.vue";

export default {
  name: "Home",
  components: {
    beatHomeList,
  },
<<<<<<< HEAD
  computed: {
    logcoChack() {
    return this.$store.getters.beats
    }
   },
  created() {
    this.$store.dispatch({type: 'loadBeats'})
    console.log(this.$store.getters.beats);
  }
}
=======
};
>>>>>>> d4350566dbd9ac5c59d8864c624d80a3d59189b7
</script>

