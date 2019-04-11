<template>
    <v-layout row justify-center>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">cadastro</v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">Perfil de usuário</span>
          </v-card-title>
          <v-card-text>
            <v-container grid-list-md>
              <v-layout wrap>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Promeiro Nome*" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field label="Segundo nome" hint="Esse nome será registrado em nosso site"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md4>
                  <v-text-field
                    label="terçeiro nome*"
                    hint="Esse nome será registrado em nosso site"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Email*" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Senha*" type="password" required></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Idade*"
                    required
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-autocomplete
                    :items="['Matemática', 'História', 'Português', 'Geografia', 'Fisica', 'Esportes', 'Entreterimento', 'Video games', 'Famosos']"
                    label="Sua matéria favorita"
                    multiple
                  ></v-autocomplete>
                </v-flex>
              </v-layout>
            </v-container>
            <small></small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="digatchau = false">Cancelar</v-btn>
            <v-btn color="blue darken-1" flat @click="digaOla">Cadastrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </template>
  <script>
  export default {
    methods:{
      digaOla(){
        alert("Seu cadastro foi realizado com sucesso");
        },
        digatchau(){
          alert("fff")
        }
      
    }
  }
  </script>
  