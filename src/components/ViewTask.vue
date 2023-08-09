<template>
  <div>
    <div>
      <ul>
        <li v-for="(task, idx) in getTasks" :key="idx">
          <div
            class="w-1/2 border border-2 border-solid divide-y divide-slate-200 mt-8 mb-8 mx-auto specific-width-cont"
          >
            <p class="text-start p-4">Title: {{ task.title }}</p>
            <p class="text-start p-4">Description: {{ task.desc }}</p>
            <div class="flex items-center">
              <label class="p-4">Status</label>
              <div>
                <select
                  class="p-4 rounded bg-white border border-gray-300 shadow-md"
                  id="dropdown"
           
                >
                  <option selected value="Inprogress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <button
              @click="deleteTask(idx)"
              class="w-1/4 py-2 bg-blue-500 rounded mt-4 mb-4 hover:col-white"
            >
              Delete
            </button>
          </div>

          <!-- <button @click="updateTask(idx)" class="bg-blue-500">Update</button> -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ViewTask",
  data() {
    return {
    };
  },
  methods: {
    deleteTask(idx) {
      this.getTasks.splice(idx, 1);
    },
    //    updateTask(idx){
    //     console.log(idx);
    //     console.log(this.task.title)
    //    }
  },
  computed: {
    ...mapGetters(["getTasks"]),
  },
};
</script>

<style scoped>
@media screen and (max-width: 640px) {
  .specific-width-cont {
    width: 98%;
  }
}
</style>
