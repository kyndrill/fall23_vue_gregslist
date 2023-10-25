<template>
  <div class="container-fluid">
    <section class="row">
      <div v-if="house" class="col-12 col-md-9">
        <HouseCardComponent :houseProp="house" />
      </div>
      <div v-else class="col-12 col-md-9">
        <p>Loading... <i class="mdi mdi-loading mdi-spin"></i></p>
      </div>
    </section>
  </div>
</template>


<script>
// import { AppState } from '../AppState';
import { computed, onMounted } from 'vue';
import Pop from "../utils/Pop.js";
import { useRoute } from "vue-router";
import { housesService } from "../services/HousesService.js";
import { AppState } from "../AppState.js"

export default {
  setup() {
    let route = useRoute()

    async function getHouseById() {
      try {
        let houseId = route.params.houseId
        await housesService.getHouseById(houseId)
      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      housesService.clearData()
      getHouseById()
    })
    return {
      house: computed(() => AppState.activeHouse)
    }
  }
};
</script>


<style lang="scss" scoped></style>