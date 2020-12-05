<template>
  <section v-if="currBeat">
    <draggable v-model="songList" ghost-class="ghost" @end="onEnd">
      <transition-group type="transition" name="flip-list">
        <div
          v-for="song in songs"
          :key="song.id"
          class="song-container sortable flex space-between align-center icon"
          :class="{ active: song.id === currBeat.currSong.id }"
          :id="song.id"
          @click="changeSong(song)"
        >
          <img
            src="@/assets/img/preview.png"
            v-if="song.id !== currBeat.currSong.id"
            class="song-img"
            alt=""
          />
          <img
            src="@/assets/img/sound-gif2.gif"
            v-if="song.id === currBeat.currSong.id"
            class="song-img"
            alt=""
          />
          <img class="song-img" :src="song.imgUrl" />
          <span class="song-title">{{ song.title }}</span>
          <div class="flex align-center">
            <span class="song-dur">{{ song.duration }}</span>
            <i class="song-icon fas fa-sort"></i>
            <span @click.stop="removeSong(song.id)">
              <i class="song-icon icon fas fa-trash"></i
            ></span>
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
    currBeat: Object,
    currSong: Object,
  },
  name: "playlist",
  data() {
    return {
      songList: null,
      oldIndex: "",
      newIndex: "",
      song: null,
      isPlaying: false,
    };
  },
  computed: {
    songs() {
      return JSON.parse(JSON.stringify(this.currBeat.songs));
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
    async changeSong(song) {
      this.song = song;
      await this.$emit("changeSong", song);
      this.checkIfPlaying();
    },
  },
  created() {
    console.log('s', this.currBeat.songs);
    this.songList = JSON.parse(JSON.stringify(this.currBeat.songs));
  },
  components: {
    draggable,
  },
};
</script>
