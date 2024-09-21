import mongoose, {Schema} from 'mongoose';

import { TableNames } from '../constants/index.js';

const AccessTokenSchema = new mongoose.Schema({
    accessToken: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: TableNames.USERS,
    },
  },
  {
    timestamps: true,
  });

export const AccessTokenModel = mongoose.model(TableNames.ACCESS_TOKEN, AccessTokenSchema);
