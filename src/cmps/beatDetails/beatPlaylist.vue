<template>
  <section>
    <div v-for="(song, index) in playlist" :key="song.id">
      <div
        class="song-container flex space-between align-center icon"
        :class="{ active: index === currSongIdx }"
          @click="changeSong(song)">
          <img class="song-img" :src="song.imgUrl" />
           <h5 class="song-title">{{ song.title }}</h5>
          <div class="flex">
          <h5 class="song-dur">{{ song.duration }}</h5>
          <i @click="removeSong(song.id)" class="song-icon icon fas fa-trash"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    playlist:Array,
   currSongIdx:Number
   },
  name: "playlist",
  data() {
    return {};
  },
  computed: {},
  methods: {
    removeSong(songId) {
      this.$emit("removeSong", songId);
    },
    changeSong(song) {
      this.$emit("changeSong", song);
    },
  },
};
</script>
