import {LootBoxModel} from '../models/index.js';

export class LootBoxRepository {
  _selectFields = '_id name firstName lastName avatar followers email active';

  createLootBox(lootBox) {
    const lootBoxToCreate = new LootBoxModel(lootBox);

    return lootBoxToCreate.save();
  }

  updateLootBoxByParams(params, update) {
    return LootBoxModel.updateOne(params, update, {new: true});
  }

  async updateAllLootBoxByParams(params, update) {
     await LootBoxModel.updateMany(params, update, {new: true});
     return await LootBoxModel.find({});
  }
// Function to increment the openCount by 1
  async incrementOpenCountAndUpdate (lootBoxId, update) {
    try {
      console.log('lootBoxId',lootBoxId);
      console.log('update',update);

      const updatedLootBox = await LootBoxModel.findOneAndUpdate(
        { _id: lootBoxId },
        { $inc: { openCount: 1 }, ...update }, // Increment openCount by 1
        { new: true } // Return the updated document
      );

      console.log('Updated LootBox:', updatedLootBox);
      return updatedLootBox;
    } catch (error) {
      console.error('Error updating openCount:', error);
      throw error;
    }
  };
  deleteLootBoxById(id) {
    return LootBoxModel.findByIdAndDelete(id)
      .select(this._selectFields)
      .lean();
  }

  findOneByParams(findObject) {
    return LootBoxModel.findOne(findObject).populate('rewards');
  }

  findAllByParams(findObject) {
    return LootBoxModel.find(findObject);
  }
}

export const lootBoxRepository = new LootBoxRepository();
