<template>
  <section class="main-layout">
    <div class="flex">
      <div class="main-details">
        <beat-info class="beat-info-cmp" :beat="beat" />
        <beatPlayer class="beat-player-cmp" :currSong="currSong" />
        <beatPlaylist
          class="beat-playerlist-cmp"
          :playlist="playlist"
          @playNextSong="song"
          @removeSong="removeSong"
        />
      </div>
      <div class="chat-container">
        <beatChat class="beat-chat-cmp" />
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
export default {
  name: "beatDetails",
  data() {
    return {
      beat: null,
      songIdx: 0,
    };
  },
  computed: {
    currSong() {
      if (!this.beat) return;
      return this.beat.songs[this.songIdx];
    },
    playlist() {
      if (!this.beat) return;
      return this.beat.songs;
    },
  },
  methods: {
    removeSong(songId) {
      this.$store.dispatch({
        type: 'removeSong',
        songId
      })
    },
    song(songIdx) {
      this.songIdx = songIdx;
    },
  },
  async created() {
    const beatId = this.$route.params.id;
    let beat = await beatService.getById(beatId);
    this.beat = JSON.parse(JSON.stringify(beat));
    console.log('beat details', this.beat);
    this.$store.dispatch({
      type: "setCurrBeat",
      beat: this.beat,
    });
  },
  components: {
    beatInfo,
    beatPlayer,
    beatPlaylist,
    beatChat,
  },
};
</script>
