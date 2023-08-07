<template>
    <h3>Tasks</h3>
    <button 
    class=" bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 
    focus:outline-none focus:ring-2 focus:ring-blue-300"
    @click="createTask"
    >Create Task</button>
    <button
    class=" bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 
    focus:outline-none focus:ring-2 focus:ring-blue-300"
    >Delete Task</button>
    <button 
    class=" bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 
    focus:outline-none focus:ring-2 focus:ring-blue-300"
    >View Task</button>
    <router-view/>
</template>

<script>
export default {
  name: 'displayList',
  
  methods:{
    createTask(){
        this.$router.push('/displayList/createTask')
    }
  }
}
</script>