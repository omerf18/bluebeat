<template>
  <section>
    <i @click="toggleEmojiPicker()" class="send-btn icon far fa-smile"></i>
    <ul class="sent-emojis-container">
      <li
        v-for="sentEmoji in sentEmojis"
        :key="sentEmoji.id"
        class="emoji"
        :class="sentEmoji.class"
      ></li>
    </ul>
    <div v-if="isEmoji" class="emoji-container flex wrap space-evenly">
      <li
        v-for="emoji in emojis"
        :key="emoji.id"
        :class="emoji.class"
        @click="onEmoji(emoji.id)"
      ></li>
    </div>
  </section>
</template>
<script>
import { utilService } from "../../services/utilService.js";
export default {
  name: "emojiPicker",
  data() {
    return {
      emojis: [
        {
          id: 1,
          class: "far fa-smile",
        },
        {
          id: 2,
          class: "far fa-smile-wink",
        },
        {
          id: 3,
          class: "far fa-grin-stars",
        },
        {
          id: 4,
          class: "far fa-grin-squint-tears",
        },
        {
          id: 5,
          class: "far fa-dizzy",
        },
        {
          id: 6,
          class: "far fa-grin-tongue-squint",
        },
        {
          id: 7,
          class: "far fa-kiss-wink-heart",
        },
        {
          id: 8,
          class: "far fa-meh-rolling-eyes",
        },
        {
          id: 9,
          class: "far fa-sad-cry",
        },
        {
          id: 10,
          class: "far fa-angry",
        },
        {
          id: 11,
          class: "far fa-thumbs-up",
        },
        {
          id: 12,
          class: "far fa-thumbs-down",
        },
        {
          id: 13,
          class: "far fa-hand-peace",
        },
        {
          id: 14,
          class: "fas fa-glass-cheers",
        },
        {
          id: 15,
          class: "fas fa-praying-hands",
        },
        {
          id: 16,
          class: "fas fa-volume-up",
        },
        {
          id: 17,
          class: "fas fa-volume-mute",
        },
        {
          id: 18,
          class: "fas fa-music",
        },
        {
          id: 19,
          class: "fas fa-backward",
        },
        {
          id: 20,
          class: "fas fa-forward",
        },
        {
          id: 21,
          class: "fas fa-random",
        },
      ],
      isEmoji: false,
      sentEmojis: [],
    };
  },
  methods: {
    onEmoji(emojiId) {
      let emoji = JSON.parse(
        JSON.stringify(this.emojis.find((emoji) => emoji.id === emojiId))
      );
      emoji.id = utilService.makeId();
      this.sentEmojis.push(emoji);
      this.toggleEmojiPicker();
      this.$socket.emit("sendEmoji", emoji);
      setTimeout(() => {
        emoji.class += " start";
      }, 100);
      setTimeout(() => {
        this.sentEmojis.splice(0, 1);
      }, 7000);
    },
    toggleEmojiPicker() {
      this.isEmoji = !this.isEmoji;
    },
    reciveEmoji(emoji) {
      this.sentEmojis.push(emoji);
      setTimeout(() => {
        emoji.class += " start";
      }, 100);
      setTimeout(() => {
        this.sentEmojis.splice(0, 1);
      }, 7000);
    },
  },
  sockets: {
    reciveEmoji(emoji) {
      this.reciveEmoji(emoji);
    },
  },
};
</script>