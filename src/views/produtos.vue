<template>
    <div>
        <v-toolbar flat color="white">
            <v-toolbar-title>Lista de Produtos</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="primary" dark class="mb-2" >Adicionar Produto</v-btn>
        </v-toolbar>
        <v-data-table
            :headers="cabecalho"
            :items="produtos"
            class="elevation-1"
        >
            <template v-slot:items="props">
                <td>{{ props.item.descricao }}</td>
                <td>{{ props.item.preco }}</td>
                <td class="justify-center layout px-0">
                    <v-icon
                        small
                        class="mr-2"
                        @click="editItem(props.item)"
                    >
                        edit
                    </v-icon>
                    <v-icon
                        small
                        @click="deleteItem(props.item)"
                    >
                        delete
                    </v-icon>
                </td>
            </template>
        </v-data-table>
    </div>
</template>
<script>
export default {
    data(){
        return{
            produtos: [
                {
                    codigo: 1,
                    materia: "Matematica",
                    
                },
                {
                    codigo: 2,
                    materia: "portugues",  
                },
                {
                    codigo: 3,
                    materia: "geografia",
                },
            ],
            cabecalho: [
                {
                    text: 'Descrição',
                    align: 'center',
                    sortable: true,
                    value: 'descricao'
                },
                {
                },
                {
                    text: 'Ações',
                    align: 'center',
                    sortable: false
                }
            ]
        }
    }
}
</script>
