import axios from 'axios'

const state = {
  todoList: [],
  checkoutStatus: null
}

// getters
const getters = {
    todos: state =>state.todoList
}

// actions
const actions = {
   async fetchTodos({commit}){
          // Make a request for a user with a given ID
       const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            
       commit("setTodos",response.data);
       //console.log(response.data);
    },
    async addTodo({commit},title){
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{title});
      //console.log(response.data);
      commit("addTodos",response.data);
    },
    async deleteTodo({commit},id){
      const response = await axios.delete('https://jsonplaceholder.typicode.com/todos/${id}');
      commit('newTodoList',id);
    }

}

// mutations
const mutations = {
   setTodos: (state,todos)  => (state.todoList = todos),
   addTodos:(state,title)=>state.todoList.unshift(title),
   newTodoList:(state,id)=>state.todoList = state.todoList.filter(todo => todo.id !== id)
}

export default {
  state,
  getters,
  actions,
  mutations
}