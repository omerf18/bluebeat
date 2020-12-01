<template>
  <div class="beat-chat">
    <ul class="beat-msg">
      <li v-for="(msg, idx) in msgs" :key="idx">
        {{ msg.from }}: {{ msg.txt }}
      </li>
    </ul>
    <h4 v-if="isTyping">{{ userNowTyping }}</h4>
    <form class="send-container flex" @submit.prevent="sendMsg">
      <i class="send-btn icon fas fa-paper-plane" @click="sendMsg"></i>
      <input
        class="send-msg"
        @input="userTyping"
        type="text"
        v-model="msg.txt"
      />
    </form>
  </div>
</template>

<script>
import { beatService } from "../../services/beatService.js";

export default {
  props: {
    beat: Object,
  },
  name: "beatChat",
  data() {
    return {
      msg: { from: "Guest", txt: "" },
      msgs: [],
      topic: "",
      isTyping: false,
      userNowTyping: "",
    };
  },
  computed: {},
  methods: {
    sendMsg() {
      this.msg.from = this.$store.getters.loggedinUser;
      this.$socket.emit("sendMsg", this.msg);
      this.txt = ''
    },
    addMsg(msg) {
      this.msgs.push(msg);
    },
    userTyping() {
      const loggedinUser = this.$store.getters.loggedinUser;
      this.$socket.emit("userTyping", loggedinUser);
    },
    typing(user) {
      this.isTyping = true;
      this.userNowTyping = user + " is typing..";
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
};
</script>
