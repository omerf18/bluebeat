<template>
  <section class="main-layout login-page flex justify-center align-center">
    <form
      class="login-form flex justify-center align-center col"
      v-if="registeredUser"
      @submit.prevent="loginUser"
    >
      <h3>Username:</h3>
      <input
        type="text"
        class="login-input icon"
        v-model="userCred.username"
        placeholder="Username"
      />
      <h3>Password:</h3>
      <input
        type="text"
        class="login-input icon"
        v-model="userCred.password"
        placeholder="Password"
      />
      <button class="login-btn">Login</button>
    </form>
    <form
      class="login-form flex justify-center align-center col"
      v-else
      @submit.prevent="signupUser"
    >
      <h3>Email:</h3>
      <input
        type="email"
        class="login-input icon"
        v-model="userCred.email"
        placeholder="Email"
      />
      <h3>Username:</h3>
      <input
        type="text"
        class="login-input icon"
        v-model="userCred.username"
        placeholder="Username"
      />
      <h3>Password:</h3>
      <input
        type="text"
        class="login-input icon"
        v-model="userCred.password"
        placeholder="Password"
      />
      <button class="login-btn">Signup</button>
    </form>
  </section>
</template>

<script>
export default {
  name: "beat",
  data() {
    return {
      // registeredUser: true,
      registeredUser: false,
      userCred: {
        username: "",
        email: "",
        password: null,
      },
    };
  },
  methods: {
    loginUser() {
      this.$store.dispatch({ type: "login", userCred: this.userCred });
      // this.$router.push("/")
    },
    signupUser() {
      this.$store.dispatch({ type: "signup", userCred: this.userCred });
      // this.$router.push("/")
    },
  },
  components: {},
  computed: {},
  created() {},
};
</script>