<template>
  <div class="signup_container">
    <div class="signup_welcome">
      Sign up to start using to-do list!!
    </div>
    <div class="signup_form_body">
      <form
        @submit="checkForm"
      >
        <input 
          type="text"
          id="username"
          name="username"
          v-model="formData.username"
          placeholder="Username"
        />

        <input 
          type="password"
          id="password"
          name="password"
          v-model="formData.password"
          placeholder="Password"
        />

        <button>
          Sign Up
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
          username: '',
          password: '',
        }
      }
    },
    methods: {
      checkForm(e){
        e.preventDefault();
        if (this.formData.username === '') {
          alert("Username is required!");
        } else if (this.formData.password === '') {
          alert("Password is required!");
        } else {
          this.submitForm()
        }
      },
      submitForm(){
        axios.post("https://task-management-andyzhp.herokuapp.com/api/accounts/newUser/",this.formData)
        .then((response) => {
          this.$router.push('/')
        })
        .catch((error) => {
          alert(error.message);
        });
      },
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');
  .signup_container {
    background-image: url("https://images.unsplash.com/photo-1559239115-ce3eb7cb87ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1088&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba(173, 166, 166, 0.116);
    font-family: 'Work Sans', sans-serif;
  }
  .signup_welcome{
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: 900;
  }
  .signup_form_body {
    width: 55%;
    max-width: 500px;
    min-width: 300px;
    height: 400px;
    background-color: white;
    border-radius: 10px;    
  }
  form{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  input{
    width: 90%;
    height: 50px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-radius: 10px;
    border-width: thin;
    padding-left: 10px;
    box-sizing: border-box;
    cursor: pointer;
  }
  button{
    width: 90%;
    height: 50px;
    background-color: lightgreen;
    border-radius: 10px;
    border: none;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 20px;
    cursor: pointer;
  }
</style>