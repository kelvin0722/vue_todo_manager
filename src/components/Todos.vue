<template>
   <div>
       <h3>Todos</h3>
       <div class="todos">
           <div 
            v-for="todo in allTodos" :key="todo.id" 
            v-bind:class="{'is-complete': todo.completed}"
            class="todo"
            @dblclick="updateTodo(todo)"
            >
               {{todo.title}}
            <i class="fas fa-trash-alt" @click="deleteTodo(todo.id)"></i>
           </div>
       </div>
    </div> 
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Todos',
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    },
    computed: mapGetters(['allTodos']),
    created(){
        this.fetchTodos()
    }

}
</script>

<style scoped>
  .todos {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1rem;
  }

  .todo {
      border: 1px solid #ccc;
      background: #41b883;
      padding: 1rem;
      border-radius: 5px;
      text-align: center;
      position: relative;
      cursor: pointer;
  }

  .is-complete {
      background: grey;
  }

  i {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: #fff;
      cursor: pointer;
  }

  @media (max-width: 500px){
      .todos {
          grid-template-columns: 1fr;
      }
  }
</style>

