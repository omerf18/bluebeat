<template>
  <div id="app">
    <beatHeader />
    <router-view />
    <beatPlayer v-if="currBeat" @closePlayer="closePlayer" />
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
    currBeat() {
      return this.$store.getters.currBeat;
    },
  },
  created() {
    this.$store.dispatch({ type: "loadBeats" });
  },
};
</script>

