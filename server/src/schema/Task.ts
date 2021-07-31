import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      requred: true,
    },
    thumbnailUrl: {
      type: String,
      requred: true,
    },
    content: {
      type: String,
      requred: true,
      default: '',
    },
    language: {
      type: String,
      requred: true,
      default: 'nodejs',
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {timestamps: true},
)

export default mongoose.model('Task', schema)
