<template>
    
    <JenesiusModal  >
    <div class="p-10">
    <label for="title" class="text-left block mt-6 mb-6 text-sm font-medium text-gray-900 dark:text-white">Enter Updated Title</label>

      <input id="title"  type="text"  v-model="popUpForm.title"
      class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
       dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Walk" required
      >
      <label for="desciption" class="text-left block mt-6 mb-6 text-sm font-medium text-gray-900 dark:text-white">Enter Updated Description</label>
      <input id=" description"  type="text" v-model="popUpForm.desc"
      class="outline-none py-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
      dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Description" required
      >
      <label for="idNum" class="text-left block mt-6 mb-6 text-sm font-medium text-gray-900 dark:text-white">Enter Updated ID</label>
      <input id="idNum"  type="text" placeholder="Enter ID" v-model="popUpForm.id"
      class="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
      dark:focus:ring-blue-500 dark:focus:border-blue-500" required
      >
      <button  @click="UpdateTasks(task)" class="mt-6 mb-6 bg-neutral-300 w-full py-3 font-bold text-lg rounded-lg" >Update Task</button>
      
      <button class="mb-6 bg-neutral-300 w-full py-3 font-bold text-lg rounded-lg" @click="ClosePopUp">close</button>
      {{ task.title }}
      {{ task.desc }}
      {{ task.id }}
    </div>

    </JenesiusModal>
    
</template>

<script>
import { JenesiusModal } from "jenesius-vue-modal";


export default {
    name: "UpdatePopUp", 
    props: {
    task: {
      type: Object,
      required: true,
    },
   
  },
    components:{
        JenesiusModal
    },
    data(){
        return{
       
            popUpForm:{
                title: '',
                desc: '',
                id: ''
            }
        }
    },
    methods:{
        ClosePopUp(){
            this.$router.push('/displayList');
        }, 
        UpdateTasks(task){
        //  console.log(this.popUpForm.title);
        //  console.log("Task is ==> ",this.tasks);
         console.log("task in child", task);
         alert("Task Updated Successfully");
         task.title = this.popUpForm.title;
         task.desc = this.popUpForm.desc;
         task.id = this.popUpForm.id;
         console.log(task.id);
        },
    },
    created(){
        console.log("created hook re-renders");
    },
    updated(){
        console.log("updated hhok");
       
        
    },
    mounted(){
        console.log("mounted hook calls")
    }
    
}
</script>