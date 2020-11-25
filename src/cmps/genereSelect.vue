<template>
	<el-select v-model="selectedGenere" placeholder="genre" >
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
export default {
	props: {
		 generes:Array
	},
	data() {
		return {
			selectedGenere:''
		};
	},
	methods: {
	
    },
    created(){
      
    }
};
</script>