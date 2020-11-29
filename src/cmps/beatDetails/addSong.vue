<template>
    <section class="beat-add">
        <input  type="text" class="send-msg"  @keyup="searchYoutubeSong" v-model="searchKeyWord" placeholder="Search song" />
        <section v-if="searchedSongs" class="add-container">
            <div v-for="song in searchedSongs" :key="song.id">
                <div class="song-container flex space-between icon">
                    <img class="song-img" :src="song.imgUrl" />
                    <h4 class="song-title">{{ song.title }}</h4>
                    <div class="flex">
                        <h5 class="song-dur">{{ song.duration }}</h5>
                        <i
                            class="fas fa-plus"
                            @click="addSongToPlayList(song)"
                        ></i>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
export default {
    name: "addSong",
    props: {
        searchedSongs: Array,
    },
    data() {
        return {
            searchKeyWord: "",
        };
    },
    computed: {},
    methods: {
        async searchYoutubeSong() {
            this.$emit("setKeyWord", this.searchKeyWord);
        },
        addSongToPlayList(song){
            this.$emit('addSongToPlayList',song)
        }
    },
};
</script>

<style>
</style>