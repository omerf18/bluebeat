<template>
  <!-- <section class="main-layout" v-if="currBeat"> -->
  <section class="details-cmp" v-if="currBeat">
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
          :currSong="currBeat.currSong"
          @switchSong="switchSong"
        />
        <searchSong class="searchSong-cmp" @setKeyWord="searchYoutubeSong" />
        <div class="flex">
          <beatPlaylist
            class="beat-playerlist-cmp"
            :playlist="playlist"
            :currSongId="currBeat.currSong.id"
            @changeSong="onChangeSong"
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
      <beatChat  class="beat-chat-cmp" />
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
    };
  },
  computed: {
 
    currBeat() {
      console.log('currbeat', this.$store.getters.currBeat );
      
      return this.$store.getters.currBeat;
    },
    currSong() {
      if (!this.currBeat) return;
      console.log('currsong',this.$store.getters.currSong );
      
      return this.$store.getters.currSong;
    },
    playlist() {
      return this.$store.getters.currBeat.songs;
    },
    currLikes() {
      return this.$store.getters.currSong.likes;
    },
    searchedSongsForDisplay() {
      return this.$store.getters.searchedSongsForDisplay;
    },
  },
  methods: {
    switchSong(songId, diff, isShuffle) {
      let song;
      if (isShuffle) {
        let beatSongOpts = this.currBeat.songs.length - 1;
        let rndIdx = Math.floor(Math.random() * Math.floor(beatSongOpts));
        song = this.currBeat.songs[rndIdx];
      } else {
        let idx = this.currBeat.songs.findIndex((song) => song.id === songId);
        if (idx === 0 && diff === -1) idx = this.currBeat.songs.length - 1;
        else if (idx === this.currBeat.songs.length - 1 && diff === 1) idx = 0;
        else idx += diff;
        song = this.currBeat.songs[idx];
      }
      this.$socket.emit("songChanged", song);
    },
    onChangeSong(song){
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
    async setCurrBeat(beatId) {
      await  this.$store.dispatch({
           type: "setCurrBeat",
           beatId,
         });
          this.setCurrSong(this.currBeat.currSong)
    },
    async setCurrSong(song) {
     await this.$store.dispatch({
        type: "setCurrSong",
        song,
      });
     
    },
  },
  created() {
    let beatId = this.$route.params.id;
    console.log('id',beatId);
      this.setCurrBeat(beatId)
     this.$socket.emit("joinRoom",  beatId);
  },
  sockets: {
    beatChanged(beat) {
      this.setCurrBeat(beat._id);
    },
    songChanged(song) {
      console.log('ssssss',song);
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
  