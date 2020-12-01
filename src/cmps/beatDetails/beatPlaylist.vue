<template>
  <section>
    <draggable v-model="playlist" ghost-class="ghost" @end="onEnd">
      <transition-group type="transition" name="flip-list">
        <div
          v-for="(song, index) in playlist"
          :key="song.id"
          class="song-container sortable flex space-between align-center icon"
          :class="{ active: index === currSongIdx }"
          :id="song.id"
          @click="changeSong(song)"
        >
          <img class="song-img" :src="song.imgUrl" />
          <h5 class="song-title">{{ song.title }}</h5>
          <div class="flex">
            <h5 class="song-dur">{{ song.duration }}</h5>
            <i
              @click="removeSong(song.id)"
              class="song-icon icon fas fa-trash"
            ></i>
          </div>
        </div>
      </transition-group>
    </draggable>
  </section>
</template>

<script>
import socketService from "../../services/socketService.js";
import draggable from "vuedraggable";
export default {
  props: {
    playlist: Array,
    currSongIdx: Number,
  },
  name: "playlist",
  data() {
    return {
      oldIndex: "",
      newIndex: "",
    };
  },
  computed: {
    serPlaylist() {
      socketService.on("add song", this.playlist);
    },
  },
  methods: {
    onEnd(ev) {
      console.log("ev: ", ev);
      this.oldIndex = ev.oldIndex;
      this.newIndex = ev.newIndex;
    },
    removeSong(songId) {
      this.$emit("removeSong", songId);
    },
    changeSong(song) {
      this.$emit("changeSong", song);
    },
  },
  created() {},
  components: {
    draggable,
  },
};
</script>
