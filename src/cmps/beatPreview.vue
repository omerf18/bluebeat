  <template>
  <div class="prev-card">
    <img class="prev-img" src="beat.imgUrl" />
    <h2 class="prev-title">{{ beat.title }}</h2>
    <h3 class="prev-genre">{{ beat.genre }}</h3>
    <h3 class="prev-songs-count">{{ beat.songs.length }} Songs in playlist</h3>
    <div class="flex space-between">
      <div class="flex">
        <i class="fas fa-heart"></i>
        {{ beat.likes }}
      </div>
    <p>  ONLINE: {{beat.visits.online}} </p>
    <p>  VIEWS: {{beat.visits.views}} </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["beat"],
  name: "beatPreview",
};
</script>

<style>
</style>