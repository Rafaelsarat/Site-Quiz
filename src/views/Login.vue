<template>
        <div>
            <template>
                <v-form v-model="valid">
                    <v-container>
                     <v-layout>
                      <v-flex
                           xs12
                            md4
                          >
                          <v-text-field
                           v-model="firstname"
                          :rules="nameRules"
                          :counter="10"
                           label="Primeiro nome"
                            required
                          ></v-text-field>
                         </v-flex>
                          
                       <v-flex
                         xs12
                        md4
                          >
                          <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="E-mail"
                          required
                            ></v-text-field>
                        </v-flex>
                         
                        <v-flex
                        xs12
                        md4
                      >
                         <v-text-field
                          v-model="lastname"
                           :rules="nameRules"
                           :counter="10"
                          label="Senha"
                          required
                          ></v-text-field>
                       </v-flex>
                          
                       
                          
                      </v-layout>
                     </v-container>
               </v-form>
            </template>
        </div>
    </template>