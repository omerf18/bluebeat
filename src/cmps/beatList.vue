
<template>
    <section>
      <h1>LIST CMP HERE</h1>
        <div class="prev-container flex warp"> 
            <beat-preview v-for = "beat in beats" :key="beat._id" :beat="beat"/>
        </div>
        <!-- <ul>
            <li v-for = "beat in beats" :key="beat._id" > -->
            <!-- <li > -->
                <!-- ggg
            <beat-preview :beat="beat"/> -->
            <!-- <beat-preview /> -->
            <!-- </li>
        </ul> -->
    </section>
   
    

</template>

<script>
import beatPreview from '../cmps/beatPreview.vue'
export default {
  name: "beatList",
  props: {
    beats: Array,
  },
  methods: {
   
  },
  components: {
        beatPreview,
    },
    created(){
       
    }
}





// computed: {
//     logcoChack() {
//     return this.$store.getters.beats
//     }
//    },
//   created() {
//     this.$store.dispatch({type: 'loadBeats'})
//     console.log(this.$store.getters.beats);
//   }
</script>

<style>

</style>
