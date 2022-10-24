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


      <div class="home_listings">
        <div
          class="home_listings_item"
          v-for="data in listingData"
          :key="data.id"
        >
          <div
            class="home_listings_item_check"
            @click="handle_checks(data)"
          >
            <img v-if="data.completed" style="width:25px;height:25px" src="https://img.icons8.com/external-coco-line-kalash/344/external-check-real-estate-and-property-coco-line-kalash.png" alt="check_img"/>
            <img v-else style="width:25px;height:25px" src="https://img.icons8.com/external-good-lines-kalash/344/external-check-real-estate-and-property-good-lines-kalash-2.png" alt="check_img"/>
          </div>

          <div class="home_listings_item_content" @click="go_detail_view(data.id)">
            <div class="home_listings_item_title">
              <div v-if="data.completed" style="text-decoration: line-through">
                {{data.title}}
              </div>
              <div v-else>
                {{data.title}}
              </div>
            </div>
  
            <div class="home_listings_item_due">
              {{data.dueDate}}
            </div>
  
            <div v-if="data.priority == 'high'" class="home_listings_item_priority_high">
              {{data.priority}}
            </div>
            <div v-else-if="data.priority == 'medium'" class="home_listings_item_priority_mid">
              {{data.priority}}
            </div>
            <div v-else class="home_listings_item_priority_low">
              {{data.priority}}
            </div>
  
            <div class="home_listings_item_progress" id="progress">
              <circle-progress
                :percent="data.progress"
                :size="50"
                :border-width="8"
                :border-bg-width="8"
                fill-color="#00FF00"
              />
              <div style="margin-left:10px">
                {{data.progress}}%
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </div>


</template>

<script>
  import axiosInstance from '../utils/axiosInstance'
  import "vue3-circle-progress/dist/circle-progress.css";
  import CircleProgress from "vue3-circle-progress";


  export default {
    components: {CircleProgress},
    props: {
      filter: String,
    },
    data() {
      return {
        userid: null,
        accessToken: null,
        listingData: [],
      }
    },
    mounted() {
      this.loadAll();
    },
    watch: {
      filter(){
        if (this.filter === "All") {
          this.loadAll()
        } else if (this.filter  === "Completed") {
          this.loadCompleted()
        } else if (this.filter  === "Incomplete") {
          this.loadIncompleted()
        } else if (this.filter  === "HighPriority") {
          this.loadHighPriority()
        } else if (this.filter  === "MidPriority") {
          this.loadMidPriority()
        } else if (this.filter  === "LowPriority") {
          this.loadLowPriority()
        } else {
          // nearest Due
          this.loadNearestDue()
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
      handle_checks(data) {
        data.completed = !data.completed
        axiosInstance.put(`http://127.0.0.1:8000/api/items/${data.id}/`, data)
          .then((response) => {

          })
          .catch((error) => {
            alert(error.message)
          });
      },
      loadAll() {
        axiosInstance.get(`http://127.0.0.1:8000/api/items/`)
          .then((response) => {
            this.listingData = response.data
          })
          .catch((error) => {
            console.log(error)
          });
      },
      BubbleSort(arr) {
        for(let i = 0; i < arr.length; i++) {
          for(let j = 0; j < arr.length - i - 1; j++){
            if(Date.parse(arr[j + 1].dueDate) < Date.parse(arr[j].dueDate)) {
                //Swapping
                [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
            }
          }
        };
        return arr
      },
      loadNearestDue() {
        axiosInstance.get(`http://127.0.0.1:8000/api/items/`)
          .then((response) => {
            this.listingData = this.BubbleSort(response.data);
          })
          .catch((error) => {
            console.log(error)
          });

      },
      loadCompleted() {
        axiosInstance.get(`http://127.0.0.1:8000/api/items?completed=True`)
          .then((response) => {
            this.listingData = response.data
          })
          .catch((error) => {
            console.log(error)
          });
      },
      loadIncompleted() {
        axiosInstance.get(`http://127.0.0.1:8000/api/items?incompleted=True`)
          .then((response) => {
            this.listingData = response.data
          })
          .catch((error) => {
            console.log(error)
          });
      },
      loadHighPriority() {
        axiosInstance.get(`http://127.0.0.1:8000/api/items?priority=high`)
          .then((response) => {
            this.listingData = response.data
          })
          .catch((error) => {
            console.log(error)
          });
      },
      loadMidPriority() {
        axiosInstance.get(`http://127.0.0.1:8000/api/items?priority=medium`)
          .then((response) => {
            this.listingData = response.data
          })
          .catch((error) => {
            console.log(error)
          });
      },
      loadLowPriority() {
        axiosInstance.get(`http://127.0.0.1:8000/api/items?priority=low`)
          .then((response) => {
            this.listingData = response.data
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
    width: 90%;
  }

  .home_title{
    margin-top: 35px;
    font-size: 35px;
    font-weight: 700;
  }

  .home_num_tasks{
    color: rgb(68, 51, 51);
    margin-top: 10px;
    font-size: 17px;
    margin-bottom: 40px;
    font-weight: 700;
  }

  .add_listing_div{
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    color: grey;
    margin-bottom: 50px;
    font-weight: 900;
  }

  .add_listing_button{
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }

  


  .home_listings{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .home_listings_item {
    background-color: white;
    border-radius: 10px;
    width: 90%;
    min-height: 100px;
    box-shadow: 10px 10px 2px 1px rgba(117, 117, 117, 0.2);
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 32px;
    cursor: pointer;
    font-weight: 900;
    font-size: larger;
  }


  .home_listings_item_content{
    width: 97%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }


  .home_listings_item_check{
    width: 15px;
    height: 15px;
    margin-right: 15px;
    margin-left: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .home_listings_item_title{
    width: 65%;
    height: 100%;
    margin-right: 15px;
    word-break: break-word;
  }
  .home_listings_item_due{
    width: 15%;
    height: 100%;
    min-width: 110px;
    margin-right: 5px;
  }
  .home_listings_item_priority_high{
    width: 10%;
    min-width: 85px;
    height: 35px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(255, 60, 60);
    color: white;
    margin-right: 5px;
  }

  .home_listings_item_priority_mid {
    width: 10%;
    min-width: 85px;
    height: 35px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;
    color: black;
    margin-right: 5px;
  }

  .home_listings_item_priority_low {
    width: 10%;
    min-width: 85px;
    height: 35px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(63, 60, 255);
    color: white;
    margin-right: 5px;
  }
  
  .home_listings_item_progress{
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 650px) {
    .home_listings_item_progress {
      display: none;
    }
    .home_listings_item_title{
      font-size: 15px;
    }
    .home_listings_item_due{
      font-size: 13px;
      min-width: 80px;
    }
    .home_listings_item_priority_high{
      font-size: 15px;
      min-width: 60px;
      margin: 0;
    }
    .home_listings_item_priority_mid{
      font-size: 13px;
      min-width: 60px;
      margin: 0;
    }
    .home_listings_item_priority_low{
      font-size: 15px;
      min-width: 60px;
      margin: 0;
    }
  }

</style>