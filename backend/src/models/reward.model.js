import mongoose, {Schema} from 'mongoose';

import { TableNames } from '../constants/index.js';

const RewardSchema = new mongoose.Schema({
    amount: {
      type: Number,
      required: true,
    },
    chance: {
      type: Number,
      require: true,
    }
  },
  {
    timestamps: true,
  });

export const RewardModel = mongoose.model(TableNames.REWARD, RewardSchema);
