<template>
  <div class="beat-chat container">
    <a
     class="whatsapp-icon icon"
      href="whatsapp://send?text= text to share!"
      data-action="share/whatsapp/share"
      ><i class="fab fa-whatsapp"></i
    ></a>
    <div class="beat-msg"></div>
    <div class="send-container flex">
      <i class="send-btn icon fas fa-paper-plane"></i>
      <input class="send-msg" type="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: "beatChat",
};
</script>
