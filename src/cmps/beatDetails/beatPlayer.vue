<template>
  <section v-if="this.currSong" class="beat-player flex">
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
        <div>
          <button @click="playSong">play</button>
          <button @click="pauseSong">pause</button>
        </div>
      </div>
      <input
        class="set-vol"
        type="range"
        min="0"
        max="100"
        v-model="playerVars.vol"
        @input="setVol"
      />
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
      },
    };
  },
  methods: {
    playing() {
      console.log("o/ we are watching!!!");
    },
    pauseSong() {
      this.$refs.youtube.player.pauseVideo();
    },
    playSong() {
      this.$refs.youtube.player.playVideo();
    },
    setVol() {
      this.$refs.youtube.player.setVolume(this.playerVars.vol);
    },
  },
  computed: {
    currSongUrl() {
      return `https://www.youtube.com/embed/${this.currSong.youtubeId}/enablejsapi=1`;
    },
  },
};


//player.mute():Void
// Mutes the player.
// player.unMute():Void
</script>