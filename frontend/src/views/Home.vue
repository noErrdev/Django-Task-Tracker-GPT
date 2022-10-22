<template>
  <div class="home_body">
    <a href="/options">
      <img src="https://img.icons8.com/external-basicons-solid-edtgraphics/344/external-Options-cellphone-ui-basicons-solid-edtgraphics-2.png" alt="options" class="options"/>
    </a>
    <div class="home_left_panel">
      <LeftPanel :filter="filter" @update-filter="updateFilter"/>
    </div>
    <div class="home_main_content">
      <HomeContent :filter="filter"/>
    </div>
  </div>
</template>

<script>
  import LeftPanel from './Left_Panel.vue'
  import HomeContent from './HomeContent.vue'
  export default {
    components: {
      LeftPanel,
      HomeContent
    },
    data() {
      return {
        filter: 'All',
      }
    },
    methods: {
      updateFilter(filter) {
        this.filter = filter
      }
    }
  }
</script>

<!-- 1000px under should hide left panel -->

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');
  .home_body{
    display: flex;
    flex-direction: row;
    font-family: 'Work Sans', sans-serif;
  }

  @media screen and (min-width: 1000px) {
    .options{
      display: none
    }
    .home_left_panel {
      width: 20%;
    }
    .home_main_content {
      width: 80%;
    }
  }
  @media screen and (max-width: 1000px) {
    .options{
      width: 40px;
      height: 40px;
      position: absolute;
      top: 0;
      right: 0;
      margin-right: 20px;
      margin-top: 20px;
      cursor: pointer;
    }
    .home_left_panel {
      display: none;
    }
    .home_main_content {
      width: 100%;
    }
  }

</style>