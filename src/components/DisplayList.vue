<template>
   <div class="flex justify-evenly width-small">
    <button 
    class="lg:w-64 sm:w-48 w-full sm:max-w-xs  bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 
    focus:outline-none focus:ring-2 focus:ring-blue-300 " 
    @click="createTask"
    >Create Task</button>
    <button
    class="lg:w-64 sm:w-48 w-full sm:max-w-xs bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 
    focus:outline-none focus:ring-2 focus:ring-blue-300"
    @click="updateTask"
    >Update Task</button>
    <button 
    class="lg:w-64 sm:w-48 w-full sm:max-w-xs bg-blue-500 text-white py-2 px-4 rounded-sm hover:bg-blue-600 
    focus:outline-none focus:ring-2 focus:ring-blue-300"
    @click="viewTask"
    >View Task</button>

   </div>
    
    <router-view/>
</template>

<script>
export default {
  name: 'displayList',
  
  methods:{
    createTask(){
        this.$router.push('/displayList/createTask')
    }, 
    updateTask(){
        this.$router.push('/displayList/updateTask')
    },
    viewTask(){
        this.$router.push('/displayList/viewTask')
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 640px){
  .width-small{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    

}
}


</style>>

