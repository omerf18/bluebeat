<template>
<section class="beat-add flex main-layout col justify-center align-center">
  <form>
    <el-input type="text" v-model="beat.name" placeholder="Beat name"></el-input>
    <el-input type="textarea" :rows="2" v-model="beat.discription" placeholder="Discription"></el-input>
    <div class="flex row" >
    <genere-select :generes="genereSelectOpts"></genere-select>
    <upload-img/>
    </div>
    <el-button round >Create</el-button>
  </form>
  <el-button round @click="back">Back</el-button>
</section>
</template>

<script>
import genereSelect from '@/cmps/genereSelect';
import uploadImg from '@/cmps/uploadImg';
export default {
  name: "beatAdd",
  data(){
    return{
      beat:{
        name:'',
        category:'',
        discription:'',
        imgUrl:''
      },
      genereSelectOpts:[
        {value:'hip hop',label:'hip hop'},
        {value:'isreali',label:'isreali'},
        {value:'dance',label:'dance'},
        {value:'pop',label:'pop'},
        {value:'rock n roll',label:'rock n roll'},
        {value:'latin',label:'latin'}
      ]
      

    }

  },
  created(){

  },
  computed:{

  },
  methods:{
    back(){
            this.$router.go(-1)
  }

},
    components:{
      genereSelect,
      uploadImg
    }
}

</script>
