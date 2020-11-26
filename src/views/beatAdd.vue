<template>
<section class="beat-add flex main-layout col justify-center align-center">
  <form >
    <el-input type="text" v-model="beat.name" placeholder="Beat name"></el-input>
    <el-input type="textarea" :rows="2" v-model="beat.description" placeholder="Discription"></el-input>
    <div class="flex row" >
    <genere-select :generes="genereSelectOpts"></genere-select>
    </div>
    <el-button round @click="saveBeat">Create</el-button>
  </form>
    <upload-img @getImgUrl="setImgUrl"/>
  <el-button round @click="back">Back</el-button>
</section>
</template>

<script>
import genereSelect from '@/cmps/genereSelect';
import uploadImg from '@/cmps/uploadImg';
import {utilService} from '@/services/utilService';
export default {
  name: "beatAdd",
  data(){
    return{
      beat:null,
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
    this.beat = utilService.getEmpty()
    console.log('emptybeat', this.beat);
    

  },
  computed:{

  },
  methods:{
    back(){
            this.$router.go(-1)
  },
  saveBeat(){
    console.log('beataddddd', this.beat);
    
    this.$store.dispatch({
      type:'addBeat',
      beat:this.beat
    })
    this.$router.push('/app')
  },
  setImgUrl(imgUrl){
    console.log('imgUrl emit', imgUrl);
    
    this.beat.imgUrl = imgUrl
  }

},
    components:{
      genereSelect,
      uploadImg
    }
}

</script>
