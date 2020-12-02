<template>
  <div class="beat-chat flex col space-between">
    <ul class="beat-msg">
      <li v-for="(msg, idx) in msgs" :key="idx">
        {{ msg.from }}: {{ msg.txt }}
      </li>
    </ul>
    <h4 v-if="isTyping">{{ userNowTyping }}</h4>
    <div class="send-container flex space-between">
      <i class="send-btn icon fas fa-paper-plane" @click="sendMsg"></i>
      <form @submit.prevent="sendMsg">
        <input
          class="send-msg"
          @input="userTyping"
          type="text"
          v-model="msg.txt"
        />
      </form>
      <beat-emoji />
    </div>
  </div>
</template>

<script>
import { beatService } from "../../services/beatService.js";
import beatEmoji from "./beatEmoji.vue";

export default {
  props: {
    beat: Object,
  },
  name: "beatChat",
  data() {
    return {
      msg: { from: "", txt: "" },
      msgs: [],
      topic: "",
      isTyping: false,
      userNowTyping: "",
    };
  },
  computed: {},
  methods: {
    addMsg(msg) {
      this.msgs.push(msg);
    },
    sendMsg() {
      this.msg.from = this.$store.getters.loggedinUser;
      if (!loggedinUser) loggedinUser = "Guest: ";
      this.$socket.emit("sendMsg", this.msg);
      this.txt = "";
    },
    userTyping() {
      const loggedinUser = this.$store.getters.loggedinUser;
      if (!loggedinUser) loggedinUser = "Guest: ";
      this.$socket.emit("userTyping", loggedinUser);
    },
    typing(user) {
      console.log(user);
      this.isTyping = true;
      if (user.username) {
        this.userNowTyping = user.username + " is typing..";
      } else {
        this.userNowTyping = "Guest" + " is typing..";
      }
      setTimeout(() => {
        this.userNowTyping = "";
        this.isTyping = false;
      }, 2000);
    },
  },
  sockets: {
    sentMsg(msg) {
      this.addMsg(msg);
    },
    userTyping(user) {
      this.typing(user);
    },
  },
  created() {},
  components: {
    beatEmoji,
  },
};
</script>
