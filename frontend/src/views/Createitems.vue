<template>
  <div class="create_items_body">
    <div class="create_items_container">
      <div class="create_items_title">
        Create a Task
      </div>

      <div class="create_items_inputs">
        <div class="create-items_label_container">
          <label for="title">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            v-model="formData.title"
            placeholder="title"
            required
          />
        </div>

        <div class="create-items_label_container">
          <label for="content">
            Content:
          </label>
          <input
            type="text"
            id="content"
            name="content"
            v-model="formData.content"
            placeholder="content"
            required
          />
        </div>

        <div class="create-items_label_container">
          <label for="dueDate">
            Due Date:
          </label>
          <input 
            type="date"
            id="dueDate"
            name="dueDate"
            v-model="formData.dueDate"
            placeholder="dueDate"
            required
          />
        </div>

        <div class="create-items_label_container">
          <label for="priority">
            Priority: 
          </label>
          <select name="priority" id="priority" v-model="formData.priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        <div class="create-items_label_container">
          <label for="progress">
            Current Progress: {{formData.progress}}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            id="progress"
            name="progress"
            v-model="formData.progress"
          />
        </div>

        <div class="create-items_label_container">
          <label for="completed">
            Completed: 
          </label>
          <input
            type="checkbox"
            id="completed"
            name="completed"
            v-model="formData.completed"
            placeholder="completed"
          />
        </div>

        <button @click="submitData">
          Submit
        </button>
        <br/>
        <button @click="this.$router.push('/home')" style="background-color: red; color:white; font-size: 900;">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>


<script>
  import axiosInstance from '../utils/axiosInstance'
  export default {
    data(){
      return {
        formData: {
          title: '',
          content: '',
          dueDate: '',
          completed: false,
          priority: 'high',
          progress: 0,
        }
      }
    },
    methods: {
      submitData(e){
        e.preventDefault();
        axiosInstance.post(`/api/items/`, this.formData)
          .then((response) => {
            this.$router.push('/home')
          })
          .catch((error) => {
            alert(error.message)
          });
      }
    }
  }
</script>



<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');
  .create_items_body{
    width: 100%;
    min-height: 100vh;
    background-color: rgb(226, 226, 226);
    display: flex;
    justify-content: center;
    font-family: 'Work Sans', sans-serif;
  }
  .create_items_container{
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .create_items_title{
    font-size: 30px;
    margin-bottom: 30px;
  }
  .create_items_inputs{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
  }
  .create-items_label_container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  label {
    min-width: 100px;
    width: 10%;
  }
  input{
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 5px;
    padding-left: 10px;
    box-sizing: border-box;
  }
  #dueDate{
    width: 120px;
  }
  #completed{
    width: 20px;
    height: 20px;
  }
  #priority{
    width: 90px;
    height: 40px;
    border-radius: 5px;
    border: none;
  }
  button{
    width: 200px;
    height: 250px;
    border: none;
    border-radius: 5px;
    background-color: lightgreen;
    cursor: pointer;
    font-weight: 900;
  }
  
</style>