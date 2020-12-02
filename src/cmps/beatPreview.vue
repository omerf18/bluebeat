<template>
  <div
    class="prev-card flex col justify-center align-center icon"
    @click="beatPrev(beat._id)"
  >
    <div class="flex col prev-main-info-container">
      <div class="beat-img flex align-center justify-center">
        <img class="prev-img" :src="beat.imgUrl" />
      </div>
      <div class="prev-details flex col align-center justify-center">
        <h2 class="prev-name">{{ beat.name }}</h2>
        <h3 class="prev-genre">{{ beat.genre }}</h3>
      </div>
    </div>
    <div class="prev-info-container flex space-around align-center">
      <span class="prev-info">25 <i class="fas fa-headphones-alt"></i></span>
      <span class="prev-info">{{ beat.songs.length }} Songs</span>
      <span class="prev-info flex align-center">
        <span> {{ beat.likes }}</span><i class="prev-likes prev- fas fa-heart"></i>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["beat"],
  name: "beatPreview",
  methods: {
    beatPrev(beatId) {
      this.$router.push(`/beat/${beatId}`);
    },
  },
};
</script>

