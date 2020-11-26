<template>
  <section>
    <div v-for="playlist in playlist" :key="playlist.id">
      <div class="song-container flex space-between">
        <img class="song-img" :src="playlist.imgUrl" />
        <h4 class="song-title">{{ playlist.title }}</h4>
        <div class="flex">
          <h5 class="song-dur">{{ playlist.duration }}</h5>
          <i class="song-delete icon fas fa-trash"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["playlist"],
  name: "playlist",
};
</script>

<style>
</style>