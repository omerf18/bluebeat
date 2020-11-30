
<template>
  <section>
    <div class="main-list flex wrap" v-if="beats">
      <beat-preview class="list-item"
        v-for="beat in beats"
        :key="beat._id"
        :beat="beat"
      />
    </div>
  </section>
</template>

<script>
import beatPreview from "../cmps/beatPreview.vue";
export default {
  name: "beatList",
  props: {
    beats: Array,
  },
  methods: {},
  components: {
    beatPreview,
  },
  created() {},
};
</script>
