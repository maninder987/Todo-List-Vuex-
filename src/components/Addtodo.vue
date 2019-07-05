<template>
    <div>
        <div class='card'>
            <div class="card-body">
                <h2>{{msg}}</h2>
            </div>  
        </div>
        <br>
        <div class="container">
            <form v-on:submit.prevent="addNewTodo">
                <div class="form-group">
                    <input type="text" class='form-control' name="todo" v-model='title' id="newtodo">
                </div>
                <div class="form-group">
                    <input type="submit" class='btn btn-info' name="submit" id="submit">
                </div>
                
            </form>
        </div>
        
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:'addtodo',
    data(){
        return{
            title:''
        }
    },
    props:['msg'],
    methods:{
        ...mapActions(['addTodo']),
        addNewTodo(){
            this.addTodo(this.title);
        }
    }
}
</script>

<style>

</style>
