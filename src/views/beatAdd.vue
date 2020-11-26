<template>
    <section class="beat-add">
        <h2>{{ msg }}</h2>
        <section class="flex col justify-center align-center">
            <upload-img @getImgUrl="setImgUrl" />
            <a class="filter-btn" @click="editPrefs('imgUrl')">Edit</a>
            <div class="flex row">
            <el-input
                v-if="!beat.name"
                class="add-input"
                type="text"
                v-model="beatForDisplay.name"
                placeholder="Beat name"
            ></el-input>
            <h2 v-if="beat.name">{{ beat.name }}</h2>
            <a class="filter-btn" @click="editPrefs('name')">Edit</a>
            </div>
            <div class="flex row">
                     <el-input
                v-if="!beat.description"
                class="add-input"
                type="textarea"
                :rows="2"
                v-model="beatForDisplay.description"
                placeholder="Description"
                :value="beatForDisplay.description"
            ></el-input>
           
            <h2 v-if="beat.description">{{ beat.description }}</h2>
              <a class="filter-btn" @click="editPrefs('description')">Edit</a>
            </div>
            <div class="flex row">
                <genere-select
                    v-if="!beat.genre"
                    @setGenre="setGenre"
                    :genres="genreSelectOpts"
                ></genere-select>
                <h2 v-if="beat.genre">{{ beat.genre }}</h2>
              <a class="filter-btn" @click="editPrefs('genre')">Edit</a>
            </div>
            <a class="filter-btn" @click="savePrefs()">Save</a>
            <a class="filter-btn" round @click="saveBeat">Create</a>
        </section>
        <a round class="filter-btn" @click="back">Back</a>
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
        saveBeat() {
            // if (!beat.name || beat.genre)
            //     return this.msg = 'Please enter name/genre';
            this.$store.dispatch({
                type: "addBeat",
                beat: this.beat,
            });
            this.$router.push("/app");
        },
        setImgUrl(imgUrl) {
            console.log("imgUrl emit", imgUrl);
            this.beatForDisplay.imgUrl = imgUrl;
        },
        savePrefs() {
            this.beat.name = this.beatForDisplay.name;
            this.beat.description = this.beatForDisplay.description;
            this.beat.imgUrl = this.beatForDisplay.imgUrl;
            this.beat.genre = this.beatForDisplay.genre;
        },
        setGenre(genre) {
            console.log("genre", genre);
            this.beatForDisplay.genre = genre;
        },

        editPrefs(pref) {
            if (pref === "name") this.beat.name = "";
            if (pref === "description") this.beat.description = "";
            if (pref === "imgUrl") this.beat.imgUrl = "";
            if (pref === "genre") this.beat.genre = "";
        },
    },
    components: {
        genereSelect,
        uploadImg,
    },
};
</script>
