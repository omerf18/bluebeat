<template>
  <section class="main-layout">
    <div class="flex">
      <div class="main-details">
        <beat-info
          class="beat-info-cmp"
          :currBeat="currBeat"
          @removeBeat="removeBeat"
          @setLike="toggleLike"
        />
        <beatPlayer
          class="beat-player-cmp"
          :currSong="currSong"
          @switchSong="switchSong"
        />
        <searchSong class="searchSong-cmp" @setKeyWord="searchYoutubeSong" />
        <div class="flex">
          <beatPlaylist
            class="beat-playerlist-cmp"
            :playlist="playlist"
            :currSongId="currSong.id"
            @changeSong="setCurrSong"
            @removeSong="removeSong"
            @dragSong="dragSong"
          />
          <add-song
            :searchedSongs="searchedSongsForDisplay"
            @addSongToPlayList="addSongToPlayList"
          ></add-song>
        </div>
      </div>
      <!-- <div class="chat-container"> -->
        <beatChat v-if="beat" class="beat-chat-cmp" :beat="beat" />
      <!-- </div> -->
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
import searchSong from "../cmps/beatDetails/searchSong.vue";

export default {
  name: "beatDetails",
  data() {
    return {
      beat: null,
      newSong: null,
    };
  },
  computed: {
    currLikes() {
      console.log("likes", this.$store.getters.currBeat.likes);
      return this.currBeat.likes;
    },
    currBeat() {
      if (!this.beat) return;
      console.log(this.$store.getters.currBeat, "curr beat details computed");
      return this.$store.getters.currBeat;
    },
    currSong() {
      if (!this.beat) return;
      return this.$store.getters.currSong;
    },
    playlist() {
      if (!this.beat) return;
      let songs = this.$store.getters.currBeat.songs;
      return JSON.parse(JSON.stringify(songs));
    },
    searchedSongsForDisplay() {
      if (!this.beat) return;
      return this.$store.getters.searchedSongsForDisplay;
    },
  },
  methods: {
    switchSong(songId, diff, isShuffle) {
      let song;
      if (isShuffle) {
        let beatOpts = this.beat.songs.length - 1;
        let rndIdx = Math.floor(Math.random() * Math.floor(beatOpts));
        song = this.beat.songs[rndIdx];
      } else {
        let idx = this.beat.songs.findIndex((song) => song.id === songId);
        if (idx === 0 && diff === -1) idx = this.beat.songs.length - 1;
        else if (idx === this.beat.songs.length - 1 && diff === 1) idx = 0;
        else idx += diff;
        song = this.beat.songs[idx];
      }
      this.setCurrSong(song);
      this.$socket.emit("songChanged", song);
    },
    async dragSong(songs) {
      await this.$store.dispatch({
        type: "dragSong",
        songs,
      });
      this.$socket.emit("beatChanged", this.currBeat);
    },
    async removeSong(songId) {
      await this.$store.dispatch({
        type: "removeSong",
        songId,
      });
      this.$socket.emit("beatChanged", this.currBeat);
    },
    async removeBeat(beatId) {
      await this.$store.dispatch({
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
      await this.$store.dispatch({
        type: "addSong",
        song,
      });
      this.$socket.emit("beatChanged", this.currBeat);
    },
    async toggleLike(diff) {
      const beat = JSON.parse(JSON.stringify(this.currBeat));
      await this.$store.dispatch({ type: "addLike", beat, diff });
      this.$socket.emit("beatChanged", this.currBeat);
    },
    async setCurrBeat(beat) {
      this.$store.dispatch({
        type: "setCurrBeat",
        beat,
      });
    },
    setCurrSong(song) {
      this.$store.dispatch({
        type: "setCurrSong",
        song,
      });
    },
  },
  async created() {
    const beatId = this.$route.params.id;
    let beat = await beatService.getById(beatId);
    this.beat = JSON.parse(JSON.stringify(beat));
    this.$socket.emit("joinRoom", this.beat._id);
    this.setCurrBeat(beat);
    this.setCurrSong(this.beat.songs[0]);
  },
  sockets: {
    beatChanged(beat) {
      this.setCurrBeat(beat);
    },
    songChanged(song) {
      this.setCurrSong(song);
    },
  },
  components: {
    beatInfo,
    beatPlayer,
    beatPlaylist,
    beatChat,
    addSong,
    searchSong,
  },
};
</script>
  