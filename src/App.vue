<template>
  <div id="app">
    <beatHeader />
    <router-view />
  </div>
</template>,

<script>
import beatHeader from "@/cmps/beatHeader.vue";

export default {
  components: {
    beatHeader,
  },
};
</script>

