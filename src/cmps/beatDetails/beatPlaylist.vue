<template>
  <section>
    <draggable v-model="songList" ghost-class="ghost" @end="onEnd">
      <transition-group type="transition" name="flip-list">
        <div
          v-for="song in songs"
          :key="song.id"
          class="song-container sortable flex space-between align-center icon"
          :class="{ active: song.id === currSongId }"
          :id="song.id"
          @click="changeSong(song)"
        >
          <img class="song-img" :src="song.imgUrl" />
          <span class="song-title">{{ song.title }}</span>
          <div class="flex align-center">
            <span class="song-dur">{{ song.duration }}</span>
            <i class="song-icon fas fa-sort"></i>
            <i
              @click.prevent="removeSong(song.id)"
              class="song-icon icon fas fa-trash"
            ></i>
          </div>
        </div>
      </transition-group>
    </draggable>
  </section>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: {
    playlist: Array,
    currSongId: String,
  },
  name: "playlist",
  data() {
    return {
      songList: null,
      oldIndex: "",
      newIndex: "",
    };
  },
  computed: {
    songs() {
      return JSON.parse(JSON.stringify(this.playlist));
    },
  },
  methods: {
    onEnd(ev) {
      this.oldIndex = ev.oldIndex;
      this.newIndex = ev.newIndex;
      this.$emit("dragSong", this.songList);
    },
    removeSong(songId) {
      this.$emit("removeSong", songId);
    },
    changeSong(song) {
      this.$emit("changeSong", song);
      console.log(song);
       console.log('playing********************************');
    },
  },
  created() {
    this.songList = JSON.parse(JSON.stringify(this.playlist));
  },
  components: {
    draggable,
  },
};
</script>
