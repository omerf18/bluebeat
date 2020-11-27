<template>
    <section class="beat-add flex justify-center"> 
        <a class="filter-btn" @click="back">Back</a>
        <section class="beat-add-container flex col justify-center align-center">
            <upload-img @getImgUrl="setImgUrl" />
            <div class="flex row">
                <el-input class="add-input"  type="text"  v-model="beat.name" placeholder="Beat name" ></el-input>
                <!-- <h2 v-if="beat.name">{{ beat.name }}</h2> -->
            </div>
            <div class="flex row">
                <el-input  class="add-input" type="textarea" :rows="2" v-model="beat.description" placeholder="Description"
                    :value="beat.description" ></el-input>

                <!-- <h2 v-if="beat.description">{{ beat.description }}</h2> -->
            </div>
            <div class="genre-select flex row">
                <genere-select  @setGenre="setGenre" :genres="genreSelectOpts" ></genere-select>
                <!-- <h2 v-if="beat.genre">{{ beat.genre }}</h2> -->
            </div>
            <div class="add-btns flex space-between">
                <!-- <a class="filter-btn" @click="savePrefs()">Save</a> -->
                <a class="filter-btn" round @click="saveBeat">Create</a>
            </div>
        </section>
       
    </section>
</template>

<script>
import genereSelect from "@/cmps/genereSelect";
import uploadImg from "@/cmps/uploadImg";
import { utilService } from "@/services/utilService";
export default {
    name: "beatAdd",
    data() {
        return {
            beatForDisplay: {
                name: "",
                description: "",
                imgUrl: "",
                genre: "",
            },
            beat: null,
            msg: "",
            genreSelectOpts: [
                { value: "hip hop", label: "hip hop" },
                { value: "isreali", label: "isreali" },
                { value: "dance", label: "dance" },
                { value: "pop", label: "pop" },
                { value: "rock n roll", label: "rock n roll" },
                { value: "latin", label: "latin" },
            ],
        };
    },
    created() {
        this.beat = utilService.getEmpty();
        console.log("emptybeat", this.beat);
    },
    computed: {},
    methods: {
        back() {
            this.$router.go(-1);
        },
       async saveBeat() {
            // if (!beat.name || beat.genre)
            //     return this.msg = 'Please enter name/genre';
           const savedBeat= await this.$store.dispatch({
                type: "addBeat",
                beat: this.beat,
            });
                this.$router.push(`/beat/${savedBeat._id}`);

          
        },
        setImgUrl(imgUrl) {
            console.log("imgUrl emit", imgUrl);
            this.beat.imgUrl = imgUrl;
        },
        // savePrefs() {
        //     this.beat.name = this.beatForDisplay.name;
        //     this.beat.description = this.beatForDisplay.description;
        //     this.beat.imgUrl = this.beatForDisplay.imgUrl;
        //     this.beat.genre = this.beatForDisplay.genre;
        // },
        setGenre(genre) {
            console.log("genre", genre);
            this.beat.genre = genre;
        },

        // editPrefs(pref) {
        //     if (pref === "name") this.beat.name = "";
        //     if (pref === "description") this.beat.description = "";
        //     if (pref === "imgUrl") this.beat.imgUrl = "";
        //     if (pref === "genre") this.beat.genre = "";
        // },
    },
    components: {
        genereSelect,
        uploadImg,
    },
};
</script>
