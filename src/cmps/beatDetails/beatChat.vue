<template>
  <div class="beat-chat">
      <!-- <div class="beat-msg"></div> -->
      <ul class="beat-msg">
          <li v-for="(msg, idx) in msgs" :key="idx">
               {{msg.from}}: {{msg.txt}} 
          </li>
      </ul>
      <form class="send-container flex" @submit.prevent="sendMsg">
          <i class="send-btn icon fas fa-paper-plane" @click="sendMsg" ></i>
          <input class="send-msg" type="text" v-model="msg.txt">
      </form>
        <h4 v-if="isTyping" >{{userNowTyping}}</h4>
    
  </div>
</template>

<script>
import socketService from '../../services/socketService.js'
import {baetService} from '../../services/beatService.js'

export default {
  props: {
    beat: Object
  },
  name: "beatChat",
  data() {
    return {
      msg: {from: 'Me', txt: ''},
      msgs: [],
      topic : '',
      isTyping: false,
      userNowTyping: ''
    }
  },
  computed: {
        // loggedinUser() {
        //    return this.$store.getters.loggedinUser.username
        // },
  },
  methods: {
    sendMsg() {
      socketService.emit('chat newMsg', this.msg)
      this.msg = {from: 'Guest', txt: ''};
      // this.msg = {from: this.$store.getters.loggedinUser.username, txt: ''};
    },
    addMsg(msg) {
      this.msgs.push(msg)
    },
    userTyping() {
      this.isTyping = true;
      // const userTyping = {typing: this.isTyping ,loggedinUser: this.loggedinUser}
      // socketService.emit('user typing', userTyping);
      const userTyping = {typing: this.isTyping ,loggedinUser: 'He'}
      socketService.emit('user typing', userTyping);
      setTimeout(() => {
          this.isTyping = false;
        }, 2000);
    },
    destroyed() {
            socketService.off('chat addMsg', this.addMsg)
            socketService.terminate();
    },
  },
  created() {
    console.log(this.beat);
    socketService.emit('chat topic',this.beat._id);
    socketService.on('chat addMsg', this.addMsg);
    socketService.on('typing', this.typing);
  },
  mounted() {
    
  }
};
</script>
