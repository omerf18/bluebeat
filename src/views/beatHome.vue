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
  components: {
    beatHomeList,
  },
};
</script>

