<template>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
  <div class="w-full sm:max-w-md p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-center text-xl font-semibold mb-4">SignUp</h2>
    <input v-model="form.email" required type="text" placeholder="Enter Email" class="w-full p-2 mb-2 border border-gray-300 rounded-sm">
    <input v-model="form.password" required type="password" placeholder="Enter Password" class="w-full p-2 mb-4 border border-gray-300 rounded-sm">
    <button @click="signup" class="w-full bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
      Sign Up
    </button>
  </div>
</div>

</template>

<script>
import { mapActions } from 'vuex'
export default{
    name: 'SignUp',
    data(){
        return{
            form:{
            email: '',
            password: ''
            }
        
        }
    }, 
    methods:{
        ...mapActions(['createUser']),
        signup()
        {
           
            if(this.form.email != '' && this.form.password != '')
            {
                this.createUser(this.form);
                this.$router.push('/login')
               
            }
            
        }
    }
}
</script>