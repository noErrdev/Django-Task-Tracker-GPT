<template>
  <div class="home_leftPanel">
    <div class="home_title">
      Categories
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


    <div v-if="filter === 'HighPriority'" class="home_items_activate" @click="handle_filter">
      <img src="https://img.icons8.com/fluency/344/high-importance.png"
            alt="icon" class="home_icons" />
      High Priority
    </div>
    <div v-else class="home_items" @click="handle_filter">
      <img src="https://img.icons8.com/fluency/344/high-importance.png"
            alt="icon" class="home_icons" />
      High Priority
    </div>

    <div v-if="filter === 'MidPriority'" class="home_items_activate" @click="handle_filter">
      <img src="https://img.icons8.com/color/344/box-important--v1.png"
            alt="icon" class="home_icons" />
      Mid Priority
    </div>
    <div v-else class="home_items" @click="handle_filter">
      <img src="https://img.icons8.com/color/344/box-important--v1.png"
            alt="icon" class="home_icons" />
      Mid Priority
    </div>

    <div v-if="filter === 'LowPriority'" class="home_items_activate" @click="handle_filter">
      <img src="https://img.icons8.com/ultraviolet/344/box-important--v1.png"
            alt="icon" class="home_icons" />
      Low Priority
    </div>
    <div v-else class="home_items" @click="handle_filter">
      <img src="https://img.icons8.com/ultraviolet/344/box-important--v1.png"
            alt="icon" class="home_icons" />
      Low Priority
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


    <div class="home_items" @click="handle_filter">
      <img src="https://img.icons8.com/external-kmg-design-outline-color-kmg-design/344/external-log-out-user-interface-kmg-design-outline-color-kmg-design.png"
            alt="icon" class="home_icons" />
      Log out
    </div>

    <div class="home_items" @click="handle_filter">
      <div class="icon_ref">
        All icons used are from https://icons8.com/
      </div>
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
          } else if (event.target.innerText === "High Priority") {
            this.$emit("update-filter", "HighPriority");
          } else if (event.target.innerText === "Mid Priority") {
            this.$emit("update-filter", "MidPriority");
          } else if (event.target.innerText === "Low Priority") {
            this.$emit("update-filter", "LowPriority");
          } 

          // for mobile device
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 11px;
    bottom: 0;
    margin-bottom: 5px;
    color: black;
    font-weight: 800;
  }
  .home_leftPanel_old_style{
    height: 100vh;
    border-right: solid rgb(223, 223, 223);
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Work Sans', sans-serif;
  }
  .home_leftPanel{
    position: fixed;
    overflow-y: scroll;
    overflow-x: hidden;
    top: 0;
    bottom: 0;
    border-right: solid rgb(223, 223, 223);
    font-family: 'Work Sans', sans-serif;
  }
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
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
    font-size: larger;
    font-weight: 900;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .home_items_activate{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: rgb(236, 236, 236);
    font-weight: 700;
  }
  .home_items{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 700;
  }
  .home_icons{
    width: 30px;
    height: 30px;
    margin-right: 30px;
    margin-left: 10%;
  }
</style>