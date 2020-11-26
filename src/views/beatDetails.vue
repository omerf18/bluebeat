<template>
  <div>
    <beat-info :beat="beat" />
    <beatPlayer :currSong="currSong" />
  </div>
</template>

<script>
import { beatService } from "../services/beatService.js";
import beatInfo from "../cmps/beatDetails/beatInfo.vue";
import beatPlayer from "../cmps/beatDetails/beatPlayer.vue";
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
    beatChat,
  },
};
</script>
