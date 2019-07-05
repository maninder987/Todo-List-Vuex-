<template>
    <div class='container'>

        <div class="row">
           
                
                    <div v-for="todo in todos" :key="todo.index" class="todo col-md-2">
                        {{todo['title']}}
                        <br><br><hr>
                        <button @click="deleteTodo(todo.id)"> Delete</button>
                    </div>
            
           
        </div>
        
        
    </div>
</template>

<script>
import { mapGetters , mapActions } from 'vuex';
export default {
    name:'todo',
    data:function(){
        return {
            name:''
        }
    },
    methods:{
        ...mapActions(['fetchTodos','deleteTodo'])
    },
    computed:mapGetters(['todos']),
    created(){
        this.fetchTodos();
    }
}
</script>

<style scoped>
    .todo{
            padding: 30px;
            padding-left: 40px;
            padding-right: 40px;
            background-color: #67bcef;
            border: solid 1px #fff;
            color: #fff;
            font-weight: 600;
            font-size: 19px;
    }
    .todoDiv{
            width: 140px;
            display: inline-block;
    }
</style>
