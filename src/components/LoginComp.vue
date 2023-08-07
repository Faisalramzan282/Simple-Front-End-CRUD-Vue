<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full sm:max-w-md p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-center text-xl font-semibold mb-4">Login</h2>
    <input class="w-full p-2 mb-2 border border-gray-300 rounded-sm" v-model="loginForm.email" type="text" placeholder="Enter Email" />
    <input
    class="w-full p-2 mb-4 border border-gray-300 rounded-sm"
      v-model="loginForm.password"
      type="text"
      placeholder="Enter Password"
    />
    <button
    class="w-full bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
     @click="login">Login</button>
  </div>
  </div>
  
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "loginComp",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["validateUser"]),
    login() {
      if (this.loginForm.email != "" && this.loginForm.password != "") {
        this.validateUser(this.loginForm);
        const emailVal = localStorage.getItem("userEmail");
        const passval = localStorage.getItem("userPassword");
        if (this.loginForm.email == emailVal && this.loginForm.password == passval) {
          this.$router.push("/displayList");
        }
      }
    },
  },
};
</script>
