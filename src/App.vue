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
<<<<<<< HEAD
  computed: {
    currBeat() {
      return this.$store.getters.currBeat;
    },
  },
=======
>>>>>>> b1ad638328e2e4f2dff0d8411ef01e8cec9cf6f8
  created() {
    this.$store.dispatch({ type: "loadBeats" });
  },
};
</script>

