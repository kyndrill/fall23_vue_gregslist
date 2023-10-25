<template>
  <div class="container-fluid">
    <section class="row justify-content-evenly">
      <div class="col-12">
        <p>Welcome to the Houses page!</p>
        <button v-if="account.id" class="btn btn-info" type="button" title="Post new car!" data-bs-toggle="modal"
          data-bs-target="#houseFormModal">Post New House</button>
      </div>

      <!-- <div v-if="houses[0] == undefined" class="col-12 col-md-9">
        <p>Loading... <i class="mdi mdi-loading mdi-spin"></i></p>
      </div> -->

      <div v-for="house in houses" :key="house.id" class="col-12 col-md-5">
        <HouseCardComponent :houseProp="house" />
      </div>
    </section>
  </div>

  <HouseFormModalComponent />
</template>


<script>
import { computed, onMounted, ref } from "vue";
import Pop from "../utils/Pop.js"
import { housesService } from '../services/HousesService.js'
import { AppState } from "../AppState.js"

export default {
  setup() {

    async function getHouses() {
      try {
        await housesService.getHouses();
      } catch (error) {
        Pop.error(error)

      }
    }

    onMounted(() => {
      getHouses()
    })

    return {
      houses: computed(() => AppState.houses),
      account: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped></style>