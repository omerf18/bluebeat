<template>
  <section class="beat-info flex">
    <div class="user-profile">
      <img class="profile-img" :src="beat.createdBy.imgUrl" />
      <h4>{{ beat.createdBy.userName }}</h4>
    </div>
    <div>
      <h5>{{ beat.name }}</h5>
      <h6>{{ beat.genre }}</h6>
      <p>beat.description</p>
    </div>
    <div class="flex">
      <div class="flex">
        <h6>{{ beat.likes }}</h6>
      </div>
      <h6>VISITS: {{ beat.visits }}</h6>
      <h6>ONLINE: 2</h6>
    </div>
  </section>
</template>

<script>
export default {
  props: ["beat"],
  name: "beatInfo",
};
</script>

<style>
</style>