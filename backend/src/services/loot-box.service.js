import {lootBoxRepository} from "../repositories/index.js";

export class LootBoxService {

  createLootBox(lootBox) {
    try {
      return lootBoxRepository.createLootBox(lootBox);
    } catch (e) {
      throw Error()
    }
  }

  async updateLootBoxByParams(params, update) {
    try {
      return await lootBoxRepository.updateAllLootBoxByParams(params, update);
    } catch (e) {
      throw Error()
    }
  }

  updateAllLootBox(params, update) {
    try {
      return lootBoxRepository.incrementOpenCountAndUpdate(params, update);
    } catch (e) {
      throw Error()
    }
  }

  deleteLootBoxById(id) {
    try {
      return lootBoxRepository.deleteLootBoxById(id)
    } catch (e) {
      throw Error()
    }
  }

  findOneByParams(findObject) {
    try {
      return lootBoxRepository.findOneByParams(findObject);
    } catch (e) {
      throw Error()
    }
  }

  findAllByParams(findObject) {
    try {
      return lootBoxRepository.findAllByParams(findObject);
    } catch (e) {
      throw Error()
    }
  }


}

export const lootBoxService = new LootBoxService();
