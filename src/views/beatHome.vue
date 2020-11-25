<template>
  <div class="home">
    <h1>
      {{logcoChack}}
    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    
  },
  computed: {
    logcoChack() {
    return this.$store.getters.beats
    }
   },
  created() {
    this.$store.dispatch({type: 'loadBeats'})
    console.log(this.$store.getters.beats);
  }
}
</script>
