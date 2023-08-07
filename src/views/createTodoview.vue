<template>
    <div>
        <createToDo />
    </div>
  
</template>

<script>
import createToDo from '../components/createTodo.vue'
export default{
    name: 'createTask',
   components:{
    createToDo
   }
}
</script>