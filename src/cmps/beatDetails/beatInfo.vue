<template>
<<<<<<< HEAD
  <section v-if="currBeat" class="beat-info flex space-between">
    <div class="beat-info-imgs flex">
      <img class="prev-img-details" :src="currBeat.imgUrl" />
      <div class="user-profile flex col align-center justify-baseline">
        <img
          class="profile-img"
          v-if="currBeat.createdBy.imgUrl"
          :src="currBeat.createdBy.imgUrl"
        />
        <img class="profile-img" v-else src="../../assets/img/beatLogo.png" />
        <span>{{ currBeat.createdBy.userName }}</span>
      </div>
=======
  <section v-if="currBeat" :key="this.isLiked" class="beat-info flex space-between">
    <div class="beat-info-imgs flex">
      <img class="prev-img-details" :src="currBeat.imgUrl" >
    <div class="user-profile flex col align-center justify-baseline">
      <img class="profile-img" v-if="currBeat.createdBy.imgUrl" :src="currBeat.createdBy.imgUrl" />
      <img class="profile-img" v-else src="../../assets/img/default-guest.jpg" />
      <span>{{ currBeat.createdBy.userName }}</span>
    </div>
>>>>>>> b1f876a17efa2c7ac26ef8a526ef26243358f56e
    </div>
    <div class="beat-desc flex col align-center">
      <span class="beat-title">{{ currBeat.name }}</span>
      <span class="beat-genre">{{ currBeat.genre }}</span>
      <span class="beat-description">{{ currBeat.description }}</span>
    </div>
    <div class="views-container beat-desc flex col align-center space-around">
<<<<<<< HEAD
      <div class="flex" v-if="likes">
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
        <span class="beat-likes">{{ likes }}</span>
=======
      <div class="flex" v-if="currBeat.likes">
        <i @click="setLike(1)" v-if="!isLiked" class="like-btn icon far fa-heart"></i>
        <i @click="setLike(-1)" v-if="isLiked" class="like-btn icon fas fa-heart"></i>
        <span class="beat-likes" >{{currBeat.likes}}</span>
>>>>>>> b1f876a17efa2c7ac26ef8a526ef26243358f56e
      </div>
      <span class="beat-likes">{{ currBeat.visits }} Visits </span>
      <span class="beat-online"><i class=" like-btn far fa-eye"></i> 2 </span>
    </div>
<<<<<<< HEAD
    <i
      @click="emitDelete(currBeat._id)"
      class="remove-beat icon fas fa-trash"
    ></i>
=======
    <!-- <i @click="emitDelete(currBeat._id)" class="remove-beat icon fas fa-trash"></i> -->
                     
>>>>>>> b1f876a17efa2c7ac26ef8a526ef26243358f56e
  </section>
</template>

<script>
export default {
  props: {
<<<<<<< HEAD
    currBeat: Object,
    currLikes: Number,
=======
    currBeat:Object,
    // currLikes:Number
>>>>>>> b1f876a17efa2c7ac26ef8a526ef26243358f56e
  },
  name: "beatInfo",
  data() {
    return {
      isLiked: false,
    };
  },
<<<<<<< HEAD
  computed: {
    likes() {
      return this.$store.getters.currBeat.likes;
    },
=======
  computed:{

    // likes(){
    //   console.log(this.currLikes);
    //   return this.$store.getters.currBeat.likes
    // }
>>>>>>> b1f876a17efa2c7ac26ef8a526ef26243358f56e
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
<<<<<<< HEAD
  created() {
    // console.log(this.currBeat.likes,'likes');
=======
  created(){
    console.log(this.currBeat.likes,'likes');
>>>>>>> b1f876a17efa2c7ac26ef8a526ef26243358f56e
  },
};
</script>
