<template>
  <section v-if="beat" class="beat-info flex space-between">
    <div class="user-profile">
      <img class="profile-img" :src="beat.createdBy.imgUrl" />
      <h4>{{ beat.createdBy.userName }}</h4>
    </div>
    <div class="beat-desc">
      <h2>{{ beat.name }}</h2>
      <h3>{{ beat.genre }}</h3>
      <h4>{{ beat.description }}</h4>
    </div>
    <div class="views-container beat-desc">
      <div class="flex">
        <i class="like-btn far fa-heart"></i>
        <h5>{{ beat.likes }}</h5>
      </div>
      <h5>VISITS: {{ beat.visits }}</h5>
      <h5>ONLINE: 2</h5>
    </div>
    <i @click="emitDelete(beat._id)" class="remove-beat icon fas fa-trash"></i>
  </section>
</template>

<script>
export default {
  props: ["beat"],
  name: "beatInfo",
  methods: {
    emitDelete(beatId) {
      this.$emit("removeBeat", beatId);
      this.$router.push("/app");
    },
  },
};
</script>
