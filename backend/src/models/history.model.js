import mongoose, {Schema} from 'mongoose';

import { TableNames } from '../constants/index.js';

const HistorySchema = new mongoose.Schema({
    event: {
      type: String,
      required: false,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: TableNames.USERS,
      required: true,
    },
    lootBoxName: {
      type: String,
      required: false,
    },
    rewardId: {
      type: mongoose.Types.ObjectId,
      ref: TableNames.REWARD,
      required: false,
    }
  },
  {
    timestamps: true,
  });

export const HistoryModel = mongoose.model(TableNames.HISTORY, HistorySchema);
