<template>
  <section v-if="currSong" class="beat-player flex">
    <div class="beat-frame">
      <youtube
        class="player"
        :video-id="currSong.youtubeId"
        ref="youtube"
        @playing="playing"
      ></youtube>
    </div>
    <div class="song-desc">
      <h2>{{ currSong.title }}</h2>
      <h4>{{ currSong.duration }}</h4>
      <div class="flex">
        <div class="player-btn flex">
          <i @click="switchSong(currSong.id, -1)" class="fas fa-backward"></i>
          <i @click="playSong" class="fas fa-play"></i>
          <i @click="pauseSong" class="fas fa-pause"></i>
          <i @click="switchSong(currSong.id, 1)" class="fas fa-forward"></i>
        </div>
      </div>
      <div class="flex">
        <i
          @click="muteSound"
          :class="{ soundOn: !playerVars.isMuted }"
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
      },
    };
  },
  computed: {},
  methods: {
    playing() {
      console.log("o/ we are watching!!!");
    },
    switchSong(songId, num) {
      this.$emit("switchSong", songId, num);
    },
    pauseSong() {
      this.$refs.youtube.player.pauseVideo();
    },
    playSong() {
      this.$refs.youtube.player.playVideo();
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