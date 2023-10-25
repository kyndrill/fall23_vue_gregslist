<template>
  <router-link :to="{ name: 'HouseDetails', params: { houseId: houseProp.id } }">
    <div class="rounded shadow bg-light m-3 p-3">
      <section class="row">
        <div class="col-5">
          <img :src="houseProp.imgUrl" alt="House Picture" class="img-fluid m-2">
        </div>
        <div class="col-5 m-3">
          <p>Bedrooms: {{ houseProp.bedrooms }}</p>
          <p>Bathrooms: {{ houseProp.bathrooms }}</p>
          <p>Levels: {{ houseProp.levels }}</p>
          <p>Year: {{ houseProp.year }}</p>
          <p>Price: ${{ houseProp.price }}</p>
          <p>Description: {{ houseProp.description }}</p>
        </div>
      </section>
      <section class="row">
        <div class="col-12">
          <p>Created by:</p>
          <div>
            <img :src="houseProp.creator.picture" :alt="houseProp.creator.name" class="creator-img rounded-circle">
            <p> {{ houseProp.creator.name }}</p>
          </div>
        </div>
      </section>
    </div>
  </router-link>
</template>


<script>
import { House } from "../models/House.js";


export default {
  props: {
    houseProp: { type: House, required: true },
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}

.creator-img {
  max-height: 10vh;
  object-fit: cover;
}
</style>