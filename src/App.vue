<template>
  <div id="app">
    <beatHeader />
    <router-view />
    <beatPlayer />
  </div>
</template>,

<script>
import beatHeader from "@/cmps/beatHeader.vue";
import beatPlayer from "@/cmps/beatDetails/beatPlayer.vue"

export default {
  components: {
    beatHeader,
    beatPlayer
  },
 
  created() {
    this.$store.dispatch({ type: "loadBeats" });
  },
};
</script>

