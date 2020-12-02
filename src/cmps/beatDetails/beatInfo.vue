<template>
  <section v-if="currBeat"  class="beat-info flex space-between">
    <div class="beat-info-imgs flex">
      <img class="prev-img-details" :src="currBeat.imgUrl" >
    <div class="user-profile flex col align-center justify-baseline">
      <img class="profile-img" v-if="currBeat.createdBy.imgUrl" :src="currBeat.createdBy.imgUrl" />
      <img class="profile-img" v-else src="../../assets/img/beatLogo.png" />
      <span>{{ currBeat.createdBy.userName }}</span>
    </div>
    </div>
    <div class="beat-desc flex col align-center ">
      <span  class="beat-title">{{ currBeat.name }}</span>
      <span class="beat-genre">{{ currBeat.genre }}</span>
      <span class="beat-description">{{ currBeat.description }}</span>
    </div>
    <div class="views-container beat-desc flex col align-center space-around">
      <div class="flex" v-if="currBeat.likes">
        <i @click="setLike(1)" v-if="!isLiked" class="like-btn icon far fa-heart"></i>
        <i @click="setLike(-1)" v-if="isLiked" class="like-btn icon fas fa-heart"></i>
        <span class="beat-likes" >{{currBeat.likes}}</span>
      </div>
      <span class="beat-likes">{{ currBeat.visits }} Visits </span>
      <span class="beat-online"><i class=" like-btn far fa-eye"></i> 2 </span>
    </div>
    <!-- <i @click="emitDelete(currBeat._id)" class="remove-beat icon fas fa-trash"></i> -->
                     
  </section>
</template>

<script>

export default {
  props: {
    currBeat:Object,
    // currLikes:Number
  },
  name: "beatInfo",
  data(){
    return{
      isLiked : false
    }
  },
  computed:{

    // likes(){
    //   console.log(this.currLikes);
    //   return this.$store.getters.currBeat.likes
    // }
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
  created(){
    console.log(this.currBeat.likes,'likes');
  },
 
};
</script>
