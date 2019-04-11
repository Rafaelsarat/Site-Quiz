<template>
<div>
  <div class="text-xs-center">
     <v-toolbar>
      <v-menu bottom
        origin="center center"
        transition="scale-transition"
      >
      <template v-slot:activator="{ on }" >
        <v-toolbar-side-icon v-on="on" color="teal" outline></v-toolbar-side-icon>
      </template>
      
      <v-list>
        <v-list-tile
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer/>
    
      <v-text-field label="Solo" single-line solo></v-text-field>
         <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>  
   
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  </div>  
  </div>
  
</template>

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
  .rafa{
    margin-top:33px;  
}

</style>