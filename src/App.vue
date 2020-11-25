<template>
  <div id="app">
    <beatHeader />
    <router-view class="main-layout" />
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

