<template>
<section>
<div class="beat-filter flex">
<div>ALL</div>
<div>MOST VIEWED</div>
<div>HIP-HOP</div>
<div>ISRAELI</div>
<div>DANCE</div>
<div>POP</div>
<div>ROCK N ROLL</div>
<div>LATIN</div>
</div>
<beat-list />
</section>
</template>

<script>
import beatList from "@/cmps/beatList.vue";
export default {
  name: 'beatApp',
    components: {
    beatList
  }
};
</script>
