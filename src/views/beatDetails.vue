<template>
  <section class="main-layout">
    <div class="flex" v-if="beat">
      <div class="main-details">
        <beat-info
          class="beat-info-cmp"
          :currBeat="beat"
          @removeBeat="removeBeat"
        />
        <beatPlayer
          class="beat-player-cmp"
          :currSong="currSong"
          @switchSong="changeSong"
        />
        <searchSong class="searchSong-cmp" @setKeyWord="searchYoutubeSong" />
        <div class="flex">
          <beatPlaylist
            class="beat-playerlist-cmp"
            :playlist="playlist"
            :currSongId="currSong.id"
            @changeSong="switchSong"
            @removeSong="removeSong"
            @dragSong="dragSong"
          />
          <add-song
            :searchedSongs="searchedSongsForDisplay"
            @addSongToPlayList="addSongToPlayList"
          ></add-song>
        </div>
      </div>
      <div class="chat-container">
        <beatChat v-if="beat" class="beat-chat-cmp" :beat="beat" />
      </div>
    </div>
  </section>
</template>

<script>
import socketService from "../services/socketService";
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
    currBeat() {
      if (!this.beat) return;
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
    dragSong(songs) {
      this.$store.dispatch({
        type: "dragSong",
        songs,
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
    addSong(song) {
      var beat = JSON.parse(JSON.stringify(this.beat));
      beat.songs.push(song);
      socketService.emit("beat songs changed", beat);
      this.$store.dispatch({ type: "saveBeat", beat });
    },
    async addSongToPlayList(song) {
      await this.$store.dispatch({
        type: "addSong",
        song,
      });
    },
  },
  async created() {
    const beatId = this.$route.params.id;
    let beat = await beatService.getById(beatId);
    // socketService.emit('chat topic',this.beat._id);
    this.beat = JSON.parse(JSON.stringify(beat));
    socketService.emit("join beat", beatId);
    socketService.on("add song", this.addSongToPlayList);
    socketService.on("remove song");
    this.$store.dispatch({
      type: "setCurrBeat",
      beat,
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
    searchSong,
  },
};
</script>
  