<template>
  <div class="prev-card" @click="beatPrev(beat._id)">
    <div class="beat-img flex align-center justify-center">
    <img class="prev-img " :src="beat.imgUrl" />
    </div>
    <div class="prev-details flex col align-center">
      <h2 class="prev-name">{{ beat.name }}</h2>
      <h3 class="prev-genre">{{ beat.genre }}</h3>
      <h3 class="prev-song-count">{{ beat.songs.length }} Songs in playlist</h3>
      <div class="prev-info-container flex space-around align-center">
       
         <span class="prev-info">  <i class="prev-likes prev- fas fa-heart"></i> {{ beat.likes }} </span>
        <span class="prev-info">25 Online</span>
        <span class="prev-info">{{ beat.views }} Views </span>
      </div>
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

