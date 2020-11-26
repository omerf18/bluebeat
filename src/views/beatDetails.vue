<template>
  <section class="main-layout">
    <div class="flex">
      <div class="main-details">
        <beat-info class="beat-info-cmp" :beat="beat" />
        <beatPlayer class="beat-player-cmp" :currSong="currSong" />
        <beatPlaylist class="beat-playerlist-cmp" :playlist="playlist" />
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
    };
  },
  computed: {
    currSong() {
      if (!this.beat) return;
      return this.beat.songs[0];
    },
    playlist() {
      if (!this.beat) return;
      return this.beat.songs;
    },
  },
  methods: {},
  async created() {
    const beatId = this.$route.params.id;
    let beat = await beatService.getById(beatId);
    this.beat = JSON.parse(JSON.stringify(beat));
  },
  components: {
    beatInfo,
    beatPlayer,
    beatPlaylist,
    beatChat,
  },
};
</script>
