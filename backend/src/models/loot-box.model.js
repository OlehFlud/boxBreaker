import mongoose, {Schema} from 'mongoose';

import { TableNames } from '../constants/index.js';

const LootBoxSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  openCount: {
    type: Number,
    require: false,
    default: 0,
  },
  isOpened: {
    type: Boolean,
    require: false,
    default: false,
  },
  rewards: [{ type: Schema.Types.ObjectId, ref: TableNames.REWARD }],
}, {
  timestamp: true,
});
export const LootBoxModel = mongoose.model(TableNames.LOOT_BOX, LootBoxSchema);
