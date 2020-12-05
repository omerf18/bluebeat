<template>
  <section
    v-if="currBeat"
    :key="this.isLiked"
    class="beat-info flex space-between"
  >
    <div class="beat-info-imgs flex">
      <img class="prev-img-details" :src="currBeat.imgUrl" />
      <div class="user-profile flex col align-center justify-baseline">
        <img
          class="profile-img"
          v-if="currBeat.createdBy.imgUrl"
          :src="currBeat.createdBy.imgUrl"
        />
        <img
          class="profile-img"
          v-else
          src="../../assets/img/default-guest.jpg"
        />
        <span>{{ currBeat.createdBy.userName }}</span>
      </div>
    </div>
    <div class="song-info flex col justify-center align-center">
      <span class="beat-title">{{ currBeat.name }}</span>
      <span class="beat-genre">{{ currBeat.genre }}</span>
      <span class="beat-description">{{ currBeat.description }}</span>
    </div>
    <div class="views-container flex col align-center space-between">
      <div class="flex space-evenly">
        <span class="beat-likes">{{ currBeat.visits }}</span>
        <i class="like-btn far fa-eye"></i>
      </div>
      <div class="flex space-evenly">
        <span class="beat-likes">{{ currBeat.likes }}</span>
        <i
          @click="setLike(1)"
          v-if="!isLiked"
          class="like-btn icon far fa-heart"
        ></i>
        <i
          @click="setLike(-1)"
          v-if="isLiked"
          class="like-btn icon fas fa-heart"
        ></i>
      </div>
      <div class="flex space-evenly">
        <span class="beat-likes">22</span>
        <i class="like-btn fas fa-headphones-alt"></i>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    currBeat: Object,
  },
  name: "beatInfo",
  data() {
    return {
      isLiked: false,
    };
  },
  computed: {
    likes() {
      return this.$store.getters.currBeat.likes;
    },
  },
  methods: {
    emitDelete(beatId) {
      this.$emit("removeBeat", beatId);
      this.$router.push("/beat");
    },
    setLike(diff) {
      console.log(diff);
      this.$emit("setLike", diff);
      this.isLiked = !this.isLiked;
    },
  },
};
</script>
