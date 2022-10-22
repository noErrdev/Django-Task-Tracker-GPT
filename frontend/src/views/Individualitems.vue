<template>
  <div class="create_items_body">
    <div class="create_items_container">
      <div class="create_items_title">
        View your To-dos
      </div>
      <form class="create_items_inputs" @submit="updateData">
        
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

        <div class="indi_button_container">
          <button>
            Save
          </button>
          <button 
            id="init_delete_button"
            @click="deleteData"
          >
            Delete
          </button>
        </div>
      
      </form>
    </div>
  </div>
</template>


<script>
  import axios from 'axios';
  // console.log(this.$route.params.id)
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
    mounted() {
      this.getData()
    },
    methods: {
      updateData(e){
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
          axios.put(`https://to-do-list-andyzhp.herokuapp.com/api/items/${this.$route.params.id}/`,this.formData,config)
          .then((response) => {
            this.$router.push('/home')
          })
          .catch((error) => {
            alert(error.message)
          });
        }
      },
      deleteData(e) {
        e.preventDefault();
        let config = {
          headers: {
            Authorization: `Token ${localStorage.getItem('accessToken')}`
          }
        }
        axios.delete(`https://to-do-list-andyzhp.herokuapp.com/api/items/${this.$route.params.id}/`,config)
        .then((response) => {
          this.$router.push('/home')
        })
        .catch((error) => {
          alert(error.message)
        });
      },
      getData() {
        let config = {
          headers: {
            Authorization: `Token ${localStorage.getItem('accessToken')}`
          }
        }
        axios.get(`https://to-do-list-andyzhp.herokuapp.com/api/items/${this.$route.params.id}/`,config)
        .then((response) => {
          this.formData = response.data[0];
        })
        .catch((error) => {
          console.log(error)
        });
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
    height: 50px;
    width: 200px;
    border: none;
    border-radius: 5px;
    background-color: lightblue;
    cursor: pointer;
    font-family: 'Brush Script MT', cursive;
    font-size: 15px;
    font-weight: 700;
  }
  #init_delete_button{
    background-color: red;
  }
  .indi_button_container{
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
</style>