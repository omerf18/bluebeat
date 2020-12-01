<template>
  <section v-if="beat" class="beat-info flex space-between">
    <div class="beat-info-imgs flex">
      <img class="prev-img-details" :src="beat.imgUrl" >
    <div class="user-profile flex col align-center justify-baseline">
      <img class="profile-img" v-if="beat.createdBy.imgUrl" :src="beat.createdBy.imgUrl" />
      <img class="profile-img" v-else src="../../assets/img/beatLogo.png" />
      <span>{{ beat.createdBy.userName }}</span>
    </div>
    </div>
    <div class="beat-desc flex col align-center ">
      <span class="beat-title">{{ beat.name }}</span>
      <span class="beat-genre">{{ beat.genre }}</span>
      <span class="beat-description">{{ beat.description }}</span>
    </div>
    <div class="views-container beat-desc flex col align-center space-around">
      <div class="flex">
        <i @click="setLike(1)" v-if="!isLiked" class="like-btn icon far fa-heart"></i>
        <i @click="setLike(-1)" v-if="isLiked" class="like-btn icon fas fa-heart"></i>
        <span class="beat-likes">{{ beat.likes }}</span>
      </div>
      <span class="beat-likes">{{ beat.visits }} Visits </span>
      <span class="beat-online">2 Online </span>
    </div>
    <i @click="emitDelete(beat._id)" class="remove-beat icon fas fa-trash"></i>
                     
  </section>
</template>

<script>
export default {
  props: ["beat"],
  name: "beatInfo",
  data(){
    return{
      isLiked : false
    }
  },
  methods: {
    emitDelete(beatId) {
      this.$emit("removeBeat", beatId);
      this.$router.push("/beat");
    },
    setLike(diff){
      console.log(diff);
      this.$emit("setLike", diff)
      this.isLiked = !this.isLiked
    }
  },
};
</script>
