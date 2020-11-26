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
    <div>
      <h2>{{ currSong.title }}</h2>
      <div class="flex space-between">
        <h3>GENRE: {{ currSong.genre }}</h3>
        <h5>{{ currSong.duration }}</h5>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["currSong"],
  name: "beatPlayer",
  computed: {
    currSongUrl() {
      console.log("currrr", this.currSong);
      return `https://www.youtube.com/embed/${this.currSong.youtubeId}`;
    },
  },
};
</script>

