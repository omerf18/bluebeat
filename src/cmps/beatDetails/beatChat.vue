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
        @keydown="userTyping"
        type="text"
        v-model="msg.txt"
      />
    </form>
  </div>
</template>

<script>
import socketService from "../../services/socketService.js";
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
      this.msg = { from: "Guest", txt: this.msg.txt };
      socketService.emit("chat newMsg", this.msg);
      this.msg = { from: "Guest", txt: "" };
      // this.msg = {from: this.$store.getters.loggedinUser.username, txt: ''};
    },
    addMsg(msg) {
      this.msgs.push(msg);
    },
    userTyping() {
      this.isTyping = true;
      // const userTyping = {typing: this.isTyping ,loggedinUser: this.loggedinUser}
      // socketService.emit('user typing', userTyping);
      const userTyping = { typing: this.isTyping, loggedinUser: "Guest" };
      socketService.emit("user typing", userTyping);
      setTimeout(() => {
        this.isTyping = false;
      }, 3000);
    },
    typing(typing) {
      this.isTyping = typing.typing;
      this.userNowTyping = typing.loggedinUser + " is typing...";
      setTimeout(() => {
        this.userNowTyping = "";
        this.isTyping = false;
      }, 2000);
    },
    destroyed() {
      socketService.off("chat addMsg", this.addMsg);
      socketService.terminate();
    },
  },
  created() {
    socketService.setup();
    socketService.emit("chat topic", this.beat._id);
    socketService.on("chat addMsg", this.addMsg);
    socketService.on("typing", this.typing);
  },
};
</script>
