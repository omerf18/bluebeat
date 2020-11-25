<template>
  <div class="prev-card">
    <img class="prev-img" :src="beat.imgUrl" />
    <div class="prev-details flex col align-center">
      <h2 class="prev-name">{{ beat.name }}</h2>
      <h3 class="prev-genre">{{ beat.genre }}</h3>
      <h3 class="prev-song-count">{{ beat.songs.length }} Songs in playlist</h3>
      <div class="prev-info-container flex space-between">
        <div class="flex">
          <i class="prev-likes prev- fas fa-heart"></i>
          <span class="prev-info"> {{ beat.likes }} </span>
        </div>
        <span class="prev-info">ONLINE: 25</span>
        <span class="prev-info">VIEWS: {{ beat.views }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["beat"],
  name: "beatPreview",
};
</script>

<style>
</style>