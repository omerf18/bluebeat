<template>
  <section class="main-list">
    <div class="flex space-between">
      <h2>{{ category }}</h2>
      <h5>SEE ALL</h5>
    </div>
    <beat-list />
  </section>
</template>

<script>
import beatList from "@/cmps/beatList.vue";

export default {
  name: "beatHomeList",
  data() {
      return{
        category: 'TRENDING'      
      }
  },
  components: {
    beatList,
  },
};
</script>
