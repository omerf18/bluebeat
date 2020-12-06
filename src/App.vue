<template>
  <div id="app">
    <beatHeader />
    <router-view />
    <beatPlayer   @closePlayer="closePlayer"  />
  </div>
</template>,

<script>
import beatHeader from "@/cmps/beatHeader.vue";
import beatPlayer from "@/cmps/beatDetails/beatPlayer.vue";

export default {
  components: {
    beatHeader,
    beatPlayer,
  },
  methods: {
    closePlayer() {
      this.$store.commit({
        type: "setCurrBeat",
        currBeat: null,
      });
    },
  },
  computed: {
    // currBeat() {
    //   return this.$store.getters.currBeat.currSong;
    // },
  },
  created() {
    this.$store.dispatch({ type: "loadBeats" });
  },
};
</script>

