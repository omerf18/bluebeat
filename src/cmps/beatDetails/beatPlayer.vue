<template>
  <section v-if="currSong" class="beat-player container flex">
    <div class="beat-frame flex">
      <div class="beat-img flex align-center ml20">
      <img class="prev-img" :class="{ playing: playerVars.isPlaying }" :src="currSong.imgUrl" />
      </div>
      <youtube
        class="player"
        :video-id="currSong.youtubeId"
        ref="youtube"
        style="visibility: hidden"
      ></youtube>
    </div>
    <div class="song-desc flex col space-evenly justify-center align-center">
      <h2>{{ currSong.title }}</h2>
      <h4>{{ currSong.duration }}</h4>
      <div class="flex">
        <div class="player-btn flex icon">
          <i @click="switchSong(currSong.id, -1)" class="fas fa-backward"></i>
          <i v-if="!playerVars.isPlaying" @click="playSong" class="fas fa-play"></i>
          <i v-if="playerVars.isPlaying" @click="pauseSong" class="fas fa-pause"></i>
          <i @click="switchSong(currSong.id, 1)" class="fas fa-forward"></i>
          <i @click="shuffle" :class="{ active: playerVars.isShuffle }" class="fas fa-random" ></i>
        </div>
      </div>
      <div class="flex">
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
      </div>
      <!-- {{ playerVars.vol }} -->
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
        isPlaying: false,
        isShuffle: false,
      },
    };
  },
  methods: {
    shuffle() {
      this.playerVars.isShuffle = !this.playerVars.isShuffle;
    },
    switchSong(songId, diff) {
      this.$emit("switchSong", songId, diff, this.playerVars.isShuffle);
    },
    pauseSong() {
      this.$refs.youtube.player.pauseVideo();
      this.playerVars.isPlaying = false;
    },
    playSong() {
      this.$refs.youtube.player.playVideo();
      this.playerVars.isPlaying = true;
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
  },
};
</script>