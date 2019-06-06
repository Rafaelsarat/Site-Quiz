<template>
  <v-app>
    <v-toolbar class="grey darken-3" dark>
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
          :to="item.rota"
        >
            <v-list-tile-action>
		        	<v-icon>{{ item.icone }}</v-icon>
		        </v-list-tile-action>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-toolbar-title>Quiz</v-toolbar-title>
    <v-spacer/>
    
      <v-text-field label="Pesquisar" single-line solo></v-text-field>
         <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>  
   
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Suporte</v-btn>
      <v-btn to="/inicio" flat>Inicio</v-btn>
      <v-btn to="/novos teste" flat>Novos Teste</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-content>
      <router-view></router-view>
     </v-content> 
    </v-app>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Ranking', icone:"search", rota:"/rank"},
        { title: 'Meu Desempenho', icone:"assessment" , rota:"/desempenho"},
        { title: 'Minhas Questões', icone:"playlist_add_check" , rota:"/questoes"},
        { title: 'Meu Perfil', icone:"person", rota:"/perfil"},
        { title: 'Lista', icone:"person", rota:"/lista"},
        { title: 'Outros', icone:"person", rota:"/Outros"},
      ]
    })
  }
</script>
<style>
  .rafa{
    margin-top:33px;  
}

</style>
  