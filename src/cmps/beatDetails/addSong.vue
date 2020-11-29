<template>
  <section>
    <div class="add-search flex space-between align-center">
      <h5>Add song</h5>
      <input
        type="text"
        class="searchKeyword send-msg"
        @keyup="searchYoutubeSong"
        v-model="searchKeyWord"
      />
    </div>
    <section v-if="searchedSongs">
      <div v-for="song in searchedSongs" :key="song.id">
        <div class="song-container flex space-between icon">
          <img class="song-img" :src="song.imgUrl" />
          <h6 class="song-title">{{ song.title }}</h6>
          <div class="flex">
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
