<template>
  <div class="beat-chat flex col space-between">
    <ul class="beat-msg">
      <li v-for="(msg, idx) in msgs" :key="idx">
        {{ msg.from }}: {{ msg.txt }}
      </li>
    </ul>
    <h4 v-if="isTyping">{{ userNowTyping }}</h4>
    <form class="send-container" @submit.prevent="sendMsg">
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
      if(this.$store.getters.loggedinUser) {
         this.msg.from = this.$store.getters.loggedinUser.username;
      } else {
        this.msg.from = 'Guest'
      }
      this.$socket.emit("sendMsg", this.msg);
      this.msg.txt = ''
    },
    addMsg(msg) {
      this.msgs.push(msg);
    },
    userTyping() {
      const loggedinUser = this.$store.getters.loggedinUser;
      if (loggedinUser) {
        this.$socket.emit("userTyping", loggedinUser);
      } else {
        this.$socket.emit("userTyping", 'Guest');
      }
    },
    typing(user) {
      console.log(user);
      this.isTyping = true;
      if (user.username ) {
        this.userNowTyping = user.username + " is typing..";
      } else {
        this.userNowTyping = 'Guest' + " is typing..."
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
};
</script>
