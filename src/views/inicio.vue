<template>

  <div class="text-xs-center">
     <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-menu bottom
      origin="center center"
      transition="scale-transition"
    >
      <template v-slot:activator="{ on }" >
         <v-btn outline fab color="teal"
          v-on="on"
          class="rafa"
        >
         <v-icon>list</v-icon>
        </v-btn>
      </template>
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
	font-family: Arial, Helvetica, sans-serif;
	font-size: 14px;
  right: 45%;
	color: #ffffff;
	padding: 7px 20px;
	background: -moz-linear-gradient(
		top,
		#f0f0f0 0%,
		#b8b8b8 25%,
		#6b6b6b 75%,
		#424242);
	background: -webkit-gradient(
		linear, left top, left bottom,
		from(#f0f0f0),
		color-stop(0.25, #b8b8b8),
		color-stop(0.75, #6b6b6b),
		to(#424242));
	-moz-border-radius: 17px;
	-webkit-border-radius: 17px;
	border-radius: 17px;
	border: 3px solid #171717;
	-moz-box-shadow:
		0px 1px 1px rgba(000,000,000,0.5),
		inset 0px 0px 10px rgba(087,087,087,0.7);
	-webkit-box-shadow:
		0px 1px 1px rgba(000,000,000,0.5),
		inset 0px 0px 10px rgba(087,087,087,0.7);
	box-shadow:
		0px 1px 1px rgba(000,000,000,0.5),
		inset 0px 0px 10px rgba(087,087,087,0.7);
	text-shadow:
		0px -1px 0px rgba(000,000,000,0.4),
		0px 1px 2px rgba(255,255,255,0.3);
}

</style>