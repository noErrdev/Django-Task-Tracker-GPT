<template>
  <div class="create_items_body">
    <div class="create_items_container">
      <div class="create_items_title">
        Create To-dos
      </div>
      <form class="create_items_inputs" @submit="submitData">
        
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
          />
        </div>

        <div class="create-items_label_container">
          <label for="title">
            Content:
          </label>
          <input
            type="text"
            id="content"
            name="content"
            v-model="formData.content"
            placeholder="content"
          />
        </div>

        <div class="create-items_label_container">
          <label>
            Due Date:
          </label>
          <input 
            type="date"
            id="dueDate"
            name="dueDate"
            v-model="formData.dueDate"
            placeholder="dueDate"
          />
        </div>

        <div class="create-items_label_container">
          <label for="title">
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

        <button>
          Submit
        </button>
      </form>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  export default {
    data(){
      return {
        formData: {
          title: '',
          content: '',
          completed: false,
          dueDate: '',
          userid: parseInt(localStorage.getItem('userid'))
        }
      }
    },
    methods: {
      submitData(e){
        e.preventDefault();

        if (this.formData['title'] === '') {
          alert('Title can not be empty!')
        } else if (this.formData['content'] === '') {
          alert('content can not be empty!')
        } else if (this.formData['dueDate'] === '') {
          alert('dueDate can not be empty!')
        } else {
          let config = {
            headers: {
              Authorization: `Token ${localStorage.getItem('accessToken')}`
            }
          }
          axios.post("https://to-do-list-andyzhp.herokuapp.com/api/items/",this.formData, config)
          .then((response) => {
            this.$router.push('/home')
          })
          .catch((error) => {
            alert(error.message)
          });
        }
      }
    }
  }
</script>



<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');
  .create_items_body{
    height: 100vh;
    width: 100%;
    background-color: rgba(173, 166, 166, 0.116);
    display: flex;
    justify-content: center;
    font-family: 'Work Sans', sans-serif;
  }
  .create_items_container{
    width: 90%;
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
    height: 300px;
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
  button{
    width: 200px;
    height: 200px;
    border: none;
    border-radius: 5px;
    background-color: lightgrey;
    cursor: pointer;
  }
</style>