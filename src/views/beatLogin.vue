<template>
  <section class="main-layout login-page flex justify-center align-center">
    <form
      class="login-form flex justify-center align-center col"
      v-if="registeredUser"
      @submit.prevent="loginUser"
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
<<<<<<< HEAD
      // registeredUser: false,
      registeredUser: null,
=======
      registeredUser: false,
>>>>>>> f3987a67153503556e63e4271aae3c8ce7ffae29
      userCred: {
        username: "",
        email: "",
        password: null,
      },
    };
  },
  computed: {
    // registeredUser() {
    //   // console.log(this.$store.getters.isRegistered);
    //   // this.registeredUser = this.$store.getters.isRegistered
    //   return this.$store.getters.isRegistered
    //   // return this.registeredUser
    // }
  },
  methods: {
    loginUser() {
      console.log(this.userCred);
      this.$store.dispatch({ type: "login", userCred: this.userCred });
      this.$router.push("/")
    },
    signupUser() {
      this.$store.dispatch({ type: "signup", userCred: this.userCred });
      this.$router.push("/")
    },
  },
  components: {},
  computed: {},
  created() {
    this.registeredUser = this.$store.getters.isRegistered
  },
};
</script>