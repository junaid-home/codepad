import mongoose from 'mongoose'
import {DATABASE_URL} from './env'

class MongoDB {
  constructor(private connectionString: string) {
    this.connectionString = connectionString
  }

  public init(): void {
    mongoose
      .connect(this.connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.info(`[ OK ] Mongodb is connected!`)
      })
      .catch(error => {
        console.warn(`[ ERROR ] Failed to connect to Mongodb!`, error)
      })
  }
}

export default new MongoDB(DATABASE_URL)
