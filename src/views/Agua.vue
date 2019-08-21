<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>

</template>


<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://alaricocelestino.files.wordpress.com/2014/12/exodus.jpg',
          },
          {
            src: 'http://1.bp.blogspot.com/-ZA4O1MC2aX4/U-pxV4msQuI/AAAAAAAABEo/XPLwNx3t_Cw/s1600/EGITO0004%2B679.JPG',
          },
          {
            src: 'https://media-manager.noticiasaominuto.com/1920/naom_52eaa1f458392.jpg',
          },
          {
            src: 'https://c4.wallpaperflare.com/wallpaper/36/579/683/abu-simbel-ancient-artwork-clouds-wallpaper-preview.jpg',
          },
        ],
      }
    },
  }
</script>


Falta de água gera crise no Egito