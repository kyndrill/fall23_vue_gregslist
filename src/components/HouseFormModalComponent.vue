<template>
  <div class="modal" id="houseFormModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Post New Car</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="container-fluid">
          <section class="row">
            <div class="col-9">
              <form @submit.prevent="createHouse()">
                <div class="mb-3">
                  <label for="bedrooms" class="form-label">Number of Bedrooms</label>
                  <input v-model="editable.bedrooms" type="number" class="form-control" id="bedrooms" maxlength="2"
                    required>
                </div>

                <div class="mb-3">
                  <label for="bathrooms" class="form-label">Number of Bathrooms</label>
                  <input v-model="editable.bathrooms" type="number" class="form-control" id="bathrooms" maxlength="2"
                    required>
                </div>

                <div class="mb-3">
                  <label for="levels" class="form-label">Number of Levels</label>
                  <input v-model="editable.levels" type="number" class="form-control" id="levels" maxlength="2" required>
                </div>

                <div class="mb-3">
                  <label for="year" class="form-label">Year Built</label>
                  <input v-model="editable.year" type="number" class="form-control" id="year" maxlength="4" required>
                </div>

                <div class="mb-3">
                  <label for="price" class="form-label">Price</label>
                  <input v-model="editable.price" type="number" class="form-control" id="price" maxlength="10" required>
                </div>

                <div class="mb-3">
                  <label for="description" class="form-label">House Description</label>
                  <textarea v-model="editable.description" maxlength="5000" class="form-control" id="description"
                    rows="5"></textarea>
                </div>

                <div class="mb-3">
                  <label for="imgUrl" class="form-label">URL of House Image</label>
                  <input v-model="editable.imgUrl" type="url" class="form-control" id="imgUrl" maxlength="500">
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>

              </form>
            </div>
          </section>
        </div>



      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';
import Pop from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js";
import { Modal } from "bootstrap";

export default {
  setup() {
    let editable = ref({})


    return {
      editable,
      async createHouse() {
        try {
          let houseData = editable.value
          await housesService.createHouse(houseData)
          editable.value = {}
          Modal.getOrCreateInstance("#houseFormModal").hide()
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
};
</script>


<style lang="scss" scoped></style>