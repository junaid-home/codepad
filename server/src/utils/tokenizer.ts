import {JWT_KEY} from '../config/env'
import jwt from 'jsonwebtoken'

class Tokenizer {
  constructor(private key: string) {}

  public tokenize(payload: string | Object | Buffer): string {
    return jwt.sign(payload, this.key)
  }

  public decode(token: string) {
    return jwt.verify(token, this.key)
  }
}

export default new Tokenizer(JWT_KEY)
