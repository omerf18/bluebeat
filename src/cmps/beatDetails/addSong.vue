<template>
  <section v-if="searchedSongs" class="beat-add add-container">
    <div v-for="song in searchedSongs" :key="song.id">
      <div class="song-container flex align-center space-between icon">
        <img class="song-img" :src="song.imgUrl" />
        <h4 class="song-title">{{ song.title }}</h4>
        <div class="flex">
          <h5 class="song-dur">{{ song.duration }}</h5>
          <i class="fas fa-plus" @click="addSongToPlayList(song)"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "addSong",
  props: {
    searchedSongs: Array,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    addSongToPlayList(song) {
      this.$emit("addSongToPlayList", song);
    },
  },
};
</script>
