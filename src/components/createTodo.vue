<template>
    <div class="p-10">
    <label for="title" class="text-left block mt-6 mb-6 text-sm font-medium text-gray-900 dark:text-white">Enter Title</label>

      <input id="title" v-model="form.title" type="text" 
      class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
       dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Walk" required
      >
      <label for="desciption" class="text-left block mt-6 mb-6 text-sm font-medium text-gray-900 dark:text-white">Enter Description</label>
      <input id="description" v-model="form.desc" type="text" 
      class="outline-none py-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
      dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Description" required
      >
      <label for="idNum" class="text-left block mt-6 mb-6 text-sm font-medium text-gray-900 dark:text-white">Enter ID</label>
      <input id="idNum" v-model="form.id" type="text" placeholder="Enter ID"
      class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
      dark:focus:ring-blue-500 dark:focus:border-blue-500" required
      >
      <button class="mt-6 mb-6 bg-neutral-300 w-full py-3 font-bold text-lg rounded-lg" @click="createTaskFun">Create Task</button>
      
      
     
    </div>
     
</template>

<script>
import {  mapActions} from 'vuex';
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
    },
    methods: {
        ...mapActions(['createTask']),
        createTaskFun(){
            if(this.form.title == '' || this.form.desc  == ''|| this.form.id== '' )
            {
                alert('All fields are required');
            }
            if(this.form.title != '' || this.form.desc  != ''|| this.form.id != '' ){
               this.createTask(this.form);
               
                // this.$store.commit('CREATE_TASK_USER', this.form);
                this.$router.push('/displayList');
            }

        }
    }
}
</script>