
<template>
    <section>
      <h1>LIST CMP HERE</h1>
        <ul>
            <li v-for = "beat in beats" :key="beat._id" >
                ggg
            <beat-preview :beat="beat"  @deleteBeat="emitDelete"/>
            </li>
        </ul>
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
