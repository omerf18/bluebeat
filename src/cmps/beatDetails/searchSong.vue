<template>
  <div class="flex">
    <el-input
      type="text"
      class="search-new-songs"
      v-model="searchKeyWord"
      @input="searchYoutubeSong"
      placeholder="Search song"
      prefix-icon="el-icon-search"
    />
  </div>
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
      isSearch: false,
    };
  },
  computed: {},
  methods: {
    toggleSearch() {
      this.isSearch = !this.isSearch;
    },
    async searchYoutubeSong() {
        console.log(this.searchKeyWord);
      this.$emit("setKeyWord", this.searchKeyWord);
    },
  },
};
</script>
