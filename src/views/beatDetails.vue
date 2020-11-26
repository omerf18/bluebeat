<template>
  <el-select v-model="selectedGenere" placeholder="genre">
    <el-option
      v-for="genere in generes"
      :key="genere.value"
      :label="genere.label"
      :value="genere.value"
    >
    </el-option>
  </el-select>
</template>

<script>
import { beatService } from "../services/beatService.js";
export default {
  props: {
    generes: Array,
  },
  data() {
    return {
      selectedGenere: "",
      beat: null,
    };
  },
  methods: {},
  async created() {
    const beatId = this.$route.params.id;
    this.beat = await beatService.getById(beatId);
  },
};
</script>

