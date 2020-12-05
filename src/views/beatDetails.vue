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
        <searchSong class="searchSong-cmp" @setKeyWord="searchYoutubeSong" />
        <div class="flex">
          <beatPlaylist
            class="beat-playerlist-cmp"
            :currBeat="currBeat"
            :currSong="currBeat.currSong"
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
      return this.$store.getters.currBeat;
    },
    currSong() {
      if (!this.currBeat) return;
      console.log('currsong',this.$store.getters.currSong );
      
      return this.$store.getters.currSong;
    },
    currLikes() {
      return this.$store.getters.currSong.likes;
    },
    searchedSongsForDisplay() {
      return this.$store.getters.searchedSongsForDisplay;
    },
  },
  methods: {

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
  