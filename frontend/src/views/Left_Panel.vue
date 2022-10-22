<template>
  <div class="home_leftPanel">
    <div class="home_title">
      Your To-Do-List
    </div>

    <div v-if="filter === 'All'" class="home_items_activate" @click="handle_filter">
      <img src="https://img.icons8.com/fluency/344/home.png"
            alt="icon" class="home_icons" />
      All
    </div>
    <div v-else class="home_items" @click="handle_filter">
      <img src="https://img.icons8.com/fluency/344/home.png"
            alt="icon" class="home_icons" />
      All
    </div>


    <div v-if="filter === 'Completed'" class="home_items_activate" @click="handle_filter">
      <img src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/344/external-completed-education-prettycons-lineal-color-prettycons.png"
            alt="icon" class="home_icons" />
      Completed
    </div>
    <div v-else class="home_items" @click="handle_filter">
      <img src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/344/external-completed-education-prettycons-lineal-color-prettycons.png"
            alt="icon" class="home_icons" />
      Completed
    </div>


    <div v-if="filter === 'Incomplete'" class="home_items_activate" @click="handle_filter">
      <img src="https://img.icons8.com/external-others-pike-picture/344/external-Tasks-development-others-pike-picture.png"
            alt="icon" class="home_icons" />
      Incomplete
    </div>
    <div v-else class="home_items" @click="handle_filter">
      <img src="https://img.icons8.com/external-others-pike-picture/344/external-Tasks-development-others-pike-picture.png"
            alt="icon" class="home_icons" />
      Incomplete
    </div>


    <div v-if="filter === 'Due'" class="home_items_activate" @click="handle_filter">
      <img src="https://img.icons8.com/external-filled-outline-deni-mao/344/external-recent-user-interface-advertise-friendly-filled-outline-deni-mao.png"
            alt="icon" class="home_icons" />
      Nearest Due
    </div>
    <div v-else class="home_items" @click="handle_filter">
      <img src="https://img.icons8.com/external-filled-outline-deni-mao/344/external-recent-user-interface-advertise-friendly-filled-outline-deni-mao.png"
            alt="icon" class="home_icons" />
      Nearest Due
    </div>


    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    
    <div class="home_items" @click="handle_filter">
      <img src="https://img.icons8.com/external-kmg-design-detailed-outline-kmg-design/344/external-log-out-user-interface-kmg-design-detailed-outline-kmg-design.png"
            alt="icon" class="home_icons" />
      Log out
    </div>

    <div class="icon_ref">
      All icons used are from https://icons8.com/
    </div>
  </div>

</template>

<script>
  export default {
    props: {
      filter: String,
    },
    methods: {
      handle_filter(event) {
        if (event.target.innerText === "Log out") {
          localStorage.clear();
          this.$router.push('/')
        } else {
          if (event.target.innerText === "All") {
            this.$emit("update-filter", "All");
          } else if (event.target.innerText === "Completed") {
            this.$emit("update-filter", "Completed");
          } else if (event.target.innerText === "Incomplete") {
            this.$emit("update-filter", "Incomplete");
          } else if (event.target.innerText === "Nearest Due") {
            this.$emit("update-filter", "Due");
          }
          
          if (this.$route.name === 'options') {
            this.$router.push('/home')
          }
        }
      },
    },
  }
</script>

<!-- 1000px under should hide left panel -->

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');
  .icon_ref{
    position: absolute;
    font-size: 12px;
    bottom: 0;
    margin-bottom: 5px;
    color: grey;
  }

  .home_leftPanel{
    height: 100vh;
    border-right: solid rgb(223, 223, 223);
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Work Sans', sans-serif;
  }

  @media screen and (max-width: 1000px) {
    .home_leftPanel{
      width: 100%;
    }
  }

  @media screen and (min-width: 1000px) {
    .home_leftPanel{
      width: 20%;
    }
  }

  .home_title{
    width: 100%;
    height: 18%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home_items_activate{
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: rgb(236, 236, 236);
  }

  .home_items{
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .home_icons{
    width: 30px;
    height: 30px;
    margin-right: 30px;
    margin-left: 10%;
  }
</style>