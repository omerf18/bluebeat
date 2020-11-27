<template>
  <section>
    <div v-for="song in playlist" :key="song.id">
      <div
        class="song-container flex space-between icon"
        @click="changeSong(song.id)"
      >
        <img class="song-img" :src="song.imgUrl" />
        <h4 class="song-title">{{ song.title }}</h4>
        <div class="flex">
          <h5 class="song-dur">{{ song.duration }}</h5>
          <i
            @click="removeSong(song.id)"
            class="song-icon icon fas fa-trash"
          ></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["playlist"],
  name: "playlist",
  data() {
    return {};
  },
  computed: {},
  methods: {
    removeSong(songId) {
      this.$emit("removeSong", songId);
    },
    changeSong(songId) {
      let idx = this.playlist.findIndex((song) => song.id === songId);
      this.$emit("playNextSong", idx);
    },
  },
};
</script>
