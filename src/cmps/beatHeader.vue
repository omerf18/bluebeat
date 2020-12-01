<template>
  <div class="header">
    <div class="flex justify-center align-center space-between">
      <img
        class="beat-logo icon"
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
          <router-link class="header-btn" to="/beat">Beats</router-link>
          <span class="divider">|</span>
          <router-link class="header-btn" to="/beat/add"
            >Create Beat</router-link
          >
        </div>
        <i
          class="user-profile-btn icon fas fa-user-circle flex col justify-center align-center"
        ></i>
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
      this.$router.push("/beat");
    },
  },
};
</script>