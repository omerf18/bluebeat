<template>
  <div id="app">
    <beatHeader />
    <router-view />
  </div>
</template>,

<script>
import beatHeader from "@/cmps/beatHeader.vue";
import socketService from './services/socketService.js'

export default {
  components: {
    beatHeader,
  },
   created() {
    this.$store.dispatch({type: 'loadBeats'})
        // socketService.setup()
  },
};
</script>

