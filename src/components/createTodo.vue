<template>
    <div>
      <input v-model="form.title" type="text" placeholder="Enter Title">
      <input v-model="form.desc" type="text" placeholder="Enter Description">
      <input v-model="form.id" type="text" placeholder="Enter ID">
      <button>Create Task</button>
    </div>
      
</template>

<script>
export default {
    name: 'createTodo',
    data(){
        return{
         form:{
             title: '',
             desc: '',
             id: ''
         }
        }
    }
}
</script>