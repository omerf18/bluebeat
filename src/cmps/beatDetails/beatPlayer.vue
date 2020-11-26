<template>
  <section v-if="this.currSong" class="beat-player flex">
    <div class="beat-frame">
      <iframe
        id="ytplayer"
        width="100%"
        height="100%"
        :src="currSongUrl"
        frameborder="0"
      ></iframe>
      <div id="ytplayer"></div>
    </div>
    <div class="song-desc">
      <h2>{{ currSong.title }}</h2>
      <h4>{{ currSong.duration }}</h4>
    </div>
  </section>
</template>

<script>
export default {
  props: ["currSong"],
  name: "beatPlayer",
  computed: {
    currSongUrl() {
      return `https://www.youtube.com/embed/${this.currSong.youtubeId}`;
    },
  },
};
</script>

