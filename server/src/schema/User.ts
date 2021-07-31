import mongoose from 'mongoose'

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      requred: true,
    },
    lastName: {
      type: String,
      requred: true,
    },
    username: {
      type: String,
      unique: true,
      requred: true,
    },
    email: {
      type: String,
      requred: true,
      unique: true,
    },
    password: {
      type: String,
    },
    salt: {
      type: String,
    },
  },
  {timestamps: true},
)

export default mongoose.model('User', schema)
