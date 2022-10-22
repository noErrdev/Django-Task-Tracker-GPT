<template>
  <div class="home_body_content">
    <div  class="home_body_cotainer">

      <div class="home_title">
        Welcome Back !!
      </div>
      <div class="home_num_tasks">
        You've got {{listingData.length}} tasks coming up in the next days
      </div>
      
      <div class="add_listing_div" @click="add_listing">
        <img src="https://img.icons8.com/ios/344/add--v1.png" alt="add_listing" class="add_listing_button"/>
        Add a new tasks
      </div>

      <div
        class="home_listings"
        v-for="data in listingData"
        :key="data.id"
        @click="go_detail_view(data.id)"
      >
        <div>
          <div v-if="data.completed" class="home_listings_items_crossed">
            {{data.title}}
          </div>
          <div v-else class="home_listings_items">
            {{data.title}}
          </div>
        </div>

        <div>
          <div v-if="data.completed" class="home_listings_content_crossed">
            {{data.content}}
          </div>
          <div v-else class="home_listings_content">
            {{data.content}}
          </div>
        </div>

        <div class="home_listings_due_complete">
          <div>
            Due Date: {{data.dueDate}}
          </div>
          <div>
            Completed: {{data.completed}}
          </div>
        </div>

      </div>


    </div>
  </div>


</template>

<script>
  import axios from 'axios';
  export default {
    props: {
      filter: String,
    },
    data() {
      return {
        userid: null,
        accessToken: null,
        listingData: [],
        originalData: [],
      }
    },
    mounted() {
      if (localStorage.userid && localStorage.accessToken) {
        this.userid = localStorage.userid;
        this.accessToken = localStorage.accessToken;
        this.loadListing();
      } else {
        this.$router.push('/')
      }
    },
    watch: {
      filter(){
        if (this.filter === "All") {
          this.listingData = this.originalData
        } else if (this.filter  === "Completed") {
          this.listingData = this.originalData.filter(word => word.completed);
        } else if (this.filter  === "Incomplete") {
          this.listingData = this.originalData.filter(word => !word.completed);
        } else {
          // nearest Due
          let arr = this.originalData;
          for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length - i - 1; j++){
                if(arr[j + 1].dueDate < arr[j].dueDate){
                    //Swapping
                    [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
                }
            }
          };
          this.listingData = arr;
        }
      }
    },
    methods: {
      add_listing() {
        this.$router.push('/createItems')
      },
      go_detail_view(id) {
        this.$router.push(`/individualItems/${id}`)
      },
      loadListing() {
        let config = {
          headers: {
            Authorization: `Token ${localStorage.getItem('accessToken')}`
          }
        }
        axios.get(`https://to-do-list-andyzhp.herokuapp.com/api/items/getItems/${this.userid}/`,config)
        .then((response) => {
          this.listingData = response.data
          this.originalData = response.data
        })
        .catch((error) => {
          console.log(error)
        });
      },
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap');
  .home_body_content{
    width: 100%;
    min-height: 100vh;
    background-color: rgb(236, 236, 236);
    display: flex;
    justify-content: center;
    font-family: 'Work Sans', sans-serif;
  }
  .home_body_cotainer{
    width: 80%;
  }

  .home_title{
    margin-top: 35px;
    font-size: 35px;
  }

  .home_num_tasks{
    color: rgb(68, 51, 51);
    margin-top: 10px;
    font-size: 17px;
    margin-bottom: 40px;
  }

  .add_listing_div{
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    color: grey;
    margin-bottom: 50px
  }

  .add_listing_button{
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  .home_listings {
    background-color: white;
    border-radius: 10px;
    width: 90%;
    min-height: 100px;
    box-shadow: 10px 10px 2px 1px rgba(117, 117, 117, 0.2);
    display: flex;
    flex-direction: column;
    padding-left: 30px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 10px;
    margin-bottom: 30px;
    cursor: pointer;
  }

  .home_listings_items {
    font-size: 25px;
    font-weight: 900;
  }

  .home_listings_items_crossed {
    font-size: 25px;
    font-weight: 900;
    text-decoration: line-through;
    text-decoration-thickness: 3px;
  }


  .home_listings_content {
    font-size: 19px;
    color: rgba(37, 37, 37, 0.767);
  }


  .home_listings_content_crossed {
    font-size: 19px;
    color: rgba(37, 37, 37, 0.767);
    text-decoration: line-through;
    text-decoration-thickness: 3px;
  }

  .home_listings_due_complete{
    font-size: 19px;
    color: rgba(37, 37, 37, 0.767);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
  }

</style>