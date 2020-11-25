<template>
  <div id="app">
    <template v-if="!isLoading">
      <label for="imgUploader"> <img src="../assets/img/uploadImg.png" alt=""> </label>
      <input class="img-upload" type="file" name="img-uploader" id="imgUploader" @change="onUploadImg">  
    </template>
    <img class="loader" v-else src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" alt="">
    <div class="img-list">
      <img v-for="(imgUrl, idx) in imgUrls" :src="imgUrl" :key="idx" alt="img...">
    </div>
  </div>
</template>

<script>
import { uploadImg } from '@/services/imgUploadService.js';

export default {
  data() {
    return {
      isLoading: false,
      imgUrls: []
    }
  },
  methods: {
    async onUploadImg(ev) {
      this.isLoading = true;
      const res = await uploadImg(ev);
      console.log('res:', res.url)
      this.imgUrls.push(res.url)
      // this.toyToEdit.imgUrl = res.url;
      this.isLoading = false;
    }
  },

}
</script>

<style>

.loader {
  height: 150px;
}

.img-list img {
  height: 100px;
}

label img {
  height: 200px;
}



</style>
