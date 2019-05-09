<template>
     <div>
         <h1> Bem vindo {{usuario}} </h1>
     
     <input v-model="usuario">

     <button @click="realizarlogin">logar</button>
     </div>

</template>
<script>
    export default{
        data(){
            return{
                usuario: "CARTOR"
            }
        },
        methods:{
            realizarlogin(){
                if(this.usuario == "CARTOR"){
                console.log("é o brabo")
                }else{
                    console.log("Nao é brabo")
                }
            }

        }
    }
</script>
<style>

</style>
