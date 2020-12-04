<template>
  <section v-if="currSong" class="beat-player flex" >
    <div class="beat-frame flex">
      <div class="beat-img flex align-center">
        <img
          class="prev-img"
          :class="{ playing: playerVars.isPlaying }"
          :src="currSong.imgUrl"
        />
      </div>
      <youtube
      :player-vars="playerVars"
        class="player"
        :video-id="currSong.youtubeId"
        ref="youtube"
        style="visibility: hidden"
      ></youtube>
    </div>
    <div class="song-desc flex col ">
      <h2>{{ currSong.title }}</h2>
      <!-- <h4>{{ currSong.duration }}</h4> -->
      <div class="player-btn flex icon align-center space-around">
        

        <i @click="switchSong(currSong.id, -1)" class="fas fa-backward"></i>
        <i
          v-if="!playerVars.isPlaying"
          @click="playOrPauseSong(true, false)"
          class="fas fa-play"
        ></i>
        <i
          v-if="playerVars.isPlaying"
          @click="playOrPauseSong(false,false)"
          class="fas fa-pause"
        ></i>
        <i @click="switchSong(currSong.id, 1)" class="fas fa-forward"></i>
       
        <i
          @click="shuffle"
          :class="{ active: playerVars.isShuffle }"
          class="fas fa-random"
        ></i>
        <i
          @click="muteSound"
          :class="{ active: !playerVars.isMuted }"
          class="sound icon fas fa-volume-down"
        ></i>
        <input
          class="set-vol"
          type="range"
          min="0"
          max="100"
          v-model="playerVars.vol"
          @input="setVol"
        />
        <span>{{ playerVars.vol }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["currSong"],
  name: "beatPlayer",
  data() {
    return {
      playerVars: {
        autoplay: 1,
        vol: 50,
        time: null,
        isMuted: false,
        isPlaying: true,
        isShuffle: false,
      },
    };
  },
  methods: {
   
    shuffle() {
      this.playerVars.isShuffle = !this.playerVars.isShuffle;
    },
    async switchSong(songId, diff = 0) {
      await this.$emit("switchSong", songId, diff, this.playerVars.isShuffle);
    },
    async playOrPauseSong(isPlaying ,isFromSocket){
      this.playerVars.isPlaying =isPlaying
      if(isPlaying) await  this.$refs.youtube.player.playVideo();
      else await   this.$refs.youtube.player.pauseVideo();
      if (isFromSocket) return
      this.$socket.emit("setSongStatus", isPlaying)
    },
    muteSound() {
      if (!this.playerVars.isMuted) {
        this.$refs.youtube.player.mute();
        this.playerVars.isMuted = true;
      } else {
        this.$refs.youtube.player.unMute();
        this.playerVars.isMuted = false;
      }
    },
    setVol() {
      this.$refs.youtube.player.setVolume(this.playerVars.vol);
    },
      async setCurrSong(song) {
     await this.$store.dispatch({
        type: "setCurrSong",
        song,
      });
     
    },
  },
  computed:{
  player() {
      if (this.currStation) return this.$refs.youtube.player;
    },
  },
  sockets:{
    songChanged(song) {
        this.setCurrSong(song);
         this.playOrPauseSong(true, true);
    },
    songStatusChanged(isPlaying){
       this.playOrPauseSong(isPlaying, true);
    }
  },

};
</script>