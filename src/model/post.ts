import { Schema, model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { IPost } from '../utils/interface';

const postSchema = new Schema<IPost>(
  {
    _id: { type: String, default: uuidv4 },
    user_id: { type: String, required: true },
    users: { type: String, ref: 'user' },
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    syntax: { type: String },
    pathFile: { type: String },
    image: { type: String },
    isEdited: { type: Boolean, default: false },
    likes: { type: Number, default: 0 },
    linkSourceCode: { type: String },
    linkLiveDemo: { type: String },
    comment: {
      type: [
        {
          _id: { type: String, default: uuidv4 },
          user_id: { type: String },
          post_id: { type: String },
          description: { type: String },
          isEdited: { type: Boolean, default: false },
          created_at: { type: Number }
        }
      ],
      default: []
    }
  },
  {
    timestamps: true
  }
);

export default model<IPost>('post', postSchema);
