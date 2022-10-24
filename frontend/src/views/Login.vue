<template>
  <div class="login_container">
    <div class="login_welcome">
      Welcome to your Task Management App
    </div>
    <div class="login_form_body">
      <form
        @submit="checkForm"
      >
        <div class="login_title">
          Log in to your account
        </div>

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
          Log in
        </button>

        <button
          id="login_signup_button"
          @click.prevent="redirect_to_Signup"
        >
          Sign up
        </button>

        <div class="demo_user" @click="demo_Login">
          Demo User
        </div>

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
        // a
        e.preventDefault();
        if (this.formData.username === '') {
          alert("Username is required!");
        } else if (this.formData.password === '') {
          alert("Password is required!");
        } else {
          this.submitForm()
        }
      },
      demo_Login() {
        this.submitForm({
          username: 'demo',
          password: 'demo',
        });
      },
      submitForm(data) {
        if (!data) {
          data = this.formData
        }

        axios.post("http://127.0.0.1:8000/api/accounts/login/",data)
          .then((response) => {
            // on Success
            localStorage.setItem('jwtTokens',JSON.stringify(response.data));
            this.$router.push('/home');
          })
          .catch((error) => {
            // on Error
            alert("Login Failed. Make sure you enter correct Username and Password!");
          });
      },
      redirect_to_Signup(){
        this.$router.push('/signup')
      }
    },
  }
</script>


<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');
  .login_container {
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
  .login_welcome{
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 900;
  }
  .login_form_body {
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
    margin-top: 30px;
  }

  .login_title {
    font-size: 20px;
  }
  
  input {
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

  button {
    width: 90%;
    height: 50px;
    background-color: lightblue;
    border-radius: 10px;
    border: none;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 20px;
    cursor: pointer;
  }
  #login_signup_button {
    background-color: lightgreen;
  }

  .demo_user{
    cursor: pointer;
  }
</style>