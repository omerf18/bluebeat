<template>
  <section>
    <div class="add-search flex space-between align-center">
      <h3>Add song to playlist</h3>
      <input
        type="text"
        class="send-msg"
        @keyup="searchYoutubeSong"
        v-model="searchKeyWord"
      />
    </div>
    <section v-if="searchedSongs">
      <div v-for="song in searchedSongs" :key="song.id">
        <div class="song-container flex space-between icon">
          <img class="song-img" :src="song.imgUrl" />
          <h5 class="song-title">{{ song.title }}</h5>
          <div class="flex">
            <!-- <h5 class="song-dur">{{ song.duration }}</h5> -->
            <i
              class="add-song-btn fas fa-plus"
              @click="addSongToPlayList(song)"
            ></i>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: "addSong",
  props: {
    searchedSongs: Array,
  },
  data() {
    return {
      searchKeyWord: "",
    };
  },
  computed: {},
  methods: {
    async searchYoutubeSong() {
      this.$emit("setKeyWord", this.searchKeyWord);
    },
    addSongToPlayList(song) {
      this.$emit("addSongToPlayList", song);
    },
  },
};
</script>
