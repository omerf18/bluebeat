<template>
  <div class="header main-layout">
    <div class="flex justify-center align-center space-between">
      <img
        class="beat-logo"
        src="@/assets/img/beatLogo.png"
        @click="backHome"
      />
      <form @keyup="searchBeat">
        <el-input
          class="header-search"
          type="text"
          placeholder="Search a beat"
          prefix-icon="el-icon-search"
          v-model="beatToSearch"
        />
      </form>
      <div class="flex row">
        <div class="flex justify-center align-center">
          <router-link class="header-btn" to="/app">Beats</router-link>
          <router-link class="header-btn" to="/app/add"
            >Create Beat</router-link
          >
        </div>
        <i class="user-profile-btn icon fas fa-user-circle"></i>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "beatHeader",
  data() {
    return {
      genre: "",
      beatToSearch: "",
    };
  },
  methods: {
    backHome() {
      this.$router.push("/");
    },
    searchBeat() {
      this.$store.dispatch({
        type: "setTxtFilter",
        txt: this.beatToSearch,
      });
      this.$router.push("/app");
    },
  },
};
</script>