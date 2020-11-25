<template>
  <div class="home">
    <h1>dfdfdvfv

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
  created() {
    this.$store.dispatch({type: 'loadStations'})
    const stations = this.$store.getters.stations
    console.log(stations);
  }
}
</script>
