import mongoose from 'mongoose';
import { TableNames, UserStatus } from '../constants/index.js';

const tokenSubModel = {
  token: String,
  action: String,
};
const userSchema = new mongoose.Schema({

  name: {
    type: String,
    require: true,
  },
  surname: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    require: false,
  },
  status: {
    type: String,
    required: true,
    default: 'Active',
  },
  totalReward: {
    type: Number,
    required: false,
    default: 0,
  },
  tokens: [tokenSubModel],

}, {
  timestamp: true,
});

export const UserModel = mongoose.model(TableNames.USERS, userSchema);
