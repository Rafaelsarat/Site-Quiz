<template>
    <div class="text-xs-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
          class="rafa"
        >
          Menu
        </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
          @click=""
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  <div>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWQm1yEbpGEG6YOWehV51naNaFZpxM1nLdcrXy_XQIVEYAtdr'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshtrMF4pZivmrPAdivUnuMEFcsuJ3lY6znRwJ2irScKFwSf5o'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG_UHG0M_AnmazzLTfo3Zt5FTMz1462LTX80nCRjv8YAhGNmKzw'
          },
          {
            src: 'http://noticias.universia.com.br/net/images/cultura/9/9-/9-t/9-testes-para-avaliar-sua-capacidade-mental.jpg'
          }
        ]
      }
    }
  }
</script>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Ranking' },
        { title: 'Meu Desempenho' },
        { title: 'Minhas Questões' },
        { title: 'Meu Perfil' }
      ]
    })
  }
</script>
<style>

</style>