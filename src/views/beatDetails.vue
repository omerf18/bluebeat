<template>
  <section class="main-layout">
    <div class="flex">
      <div class="main-details">
        <beat-info
          class="beat-info-cmp"
          :beat="beat"
          @removeBeat="removeBeat"
        />
        <beatPlayer
          class="beat-player-cmp"
          :currSong="currSong"
          @switchSong="changeSong"
        />
        <div class="flex space-between">
          <button @click="toggleSearch">+</button>
        </div>
        <div class="flex row">
          <add-song
            v-if="isSearch"
            :searchedSongs="searchedSongsForDisplay"
            @setKeyWord="searchYoutubeSong"
            @addSongToPlayList="addSongToPlayList"
          ></add-song>
          <beatPlaylist
            class="beat-playerlist-cmp"
            :playlist="playlist"
            :currSongIdx="currSongIdx"
            @changeSong="switchSong"
            @removeSong="removeSong"
          />
        </div>
      </div>
      <div class="chat-container">
        <beatChat v-if="beat" class="beat-chat-cmp" :beat="beat" />
        <add-song
          class="add-song-cmp"
          :searchedSongs="searchedSongsForDisplay"
          @setKeyWord="searchYoutubeSong"
          @addSongToPlayList="addSongToPlayList"
        ></add-song>
      </div>
    </div>
  </section>
</template>

<script>
import { beatService } from "../services/beatService.js";
import beatInfo from "../cmps/beatDetails/beatInfo.vue";
import beatPlayer from "../cmps/beatDetails/beatPlayer.vue";
import beatPlaylist from "../cmps/beatDetails/beatPlaylist.vue";
import beatChat from "../cmps/beatDetails/beatChat.vue";
import addSong from "../cmps/beatDetails/addSong.vue";

export default {
  name: "beatDetails",
  data() {
    return {
      beat: null,
      serchYoutubeSong: "",
      isSearch: false,
    };
  },
  computed: {
    currSong() {
      if (!this.beat) return;
      return this.$store.getters.getCurrSong;
    },
    playlist() {
      if (!this.beat) return;
      return this.beat.songs;
    },
    currBeatImg() {
      if (!this.beat) return;
      return this.beat.imgUrl;
    },
    currSongIdx() {
      if (!this.beat) return;
      const list = this.playlist;
      return list.findIndex((song) => song.id === this.currSong.id);
    },
    searchedSongsForDisplay() {
      if (!this.beat) return;
      return this.$store.getters.searchedSongsForDisplay;
    },
  },
  methods: {
    changeSong(songId, diff, isShuffle) {
      let song;
      if (isShuffle) {
        let beatOpts = this.beat.songs.length - 1;
        let rndIdx = Math.floor(Math.random() * Math.floor(beatOpts));
        song = this.beat.songs[rndIdx];
      } else {
        let idx = this.beat.songs.findIndex((song) => song.id === songId);
        if (idx === 0 && diff === -1) return;
        else if (idx === this.beat.songs.length - 1 && diff === 1) idx = 0;
        else if (diff === 1) idx += 1;
        else idx += -1;
        song = this.beat.songs[idx];
      }
      this.$store.dispatch({
        type: "setCurrSong",
        song,
      });
    },
    removeSong(songId) {
      this.$store.dispatch({
        type: "removeSong",
        songId,
      });
    },
    switchSong(song) {
      this.$store.dispatch({
        type: "setCurrSong",
        song,
      });
    },
    removeBeat(beatId) {
      this.$store.dispatch({
        type: "removeBeat",
        beatId,
      });
    },
    async searchYoutubeSong(keyWord) {
      this.$store.dispatch({
        type: "searchSong",
        keyWord,
      });
    },
    async addSongToPlayList(song) {
      this.$store.dispatch({
        type: "addSong",
        song,
      });
    },
    toggleSearch() {
      this.isSearch = !this.isSearch;
    },
  },
  async created() {
    const beatId = this.$route.params.id;
    let beat = await beatService.getById(beatId);
    this.beat = JSON.parse(JSON.stringify(beat));
    this.$store.dispatch({
      type: "setCurrBeat",
      beat: this.beat,
    });
    this.$store.dispatch({
      type: "setCurrSong",
      song: this.beat.songs[0],
    });
  },
  components: {
    beatInfo,
    beatPlayer,
    beatPlaylist,
    beatChat,
    addSong,
  },
};
</script>
