import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { IToken } from '../utils/interface';

const TokenSchema = new Schema<IToken>(
  {
    _id: { type: String, default: uuidv4 },
    email: { type: String },
    token_number: { type: Number }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

export default model<IToken>('token', TokenSchema);