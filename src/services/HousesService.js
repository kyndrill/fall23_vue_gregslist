import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { House } from "../models/House.js"

class HousesService {

  async getHouses() {
    const res = await api.get("api/houses")
    logger.log(res.data)
    let newHouses = res.data.map(pojo => new House(pojo))
    AppState.houses = newHouses
  }

  async getHouseById(houseId) {
    const res = await api.get(`api/houses/${houseId}`)
    logger.log(res.data)
    let foundHouse = new House(res.data)
    AppState.activeHouse = foundHouse
  }

  async createHouse(houseData) {
    const res = await api.post("api/houses", houseData)
    let newHouse = new House(res.data)
    AppState.houses.push(newHouse)
  }

  clearData() {
    AppState.activeHouse = null
  }
}

export const housesService = new HousesService()