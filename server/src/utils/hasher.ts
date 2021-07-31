import crypto from 'crypto'

class Hasher {
  public async hash(str: string): Promise<{hash: string; salt: string}> {
    const salt = crypto.randomBytes(16).toString('hex')

    return new Promise((resolve, reject) => {
      crypto.pbkdf2(str, salt, 1000, 64, 'sha512', (error, x) => {
        if (error) reject(error)

        resolve({hash: x.toString('hex'), salt})
      })
    })
  }

  public async verifyHash(str: string, salt: string, hash: string) {
    const reHash = await new Promise((resolve, reject) => {
      crypto.pbkdf2(str, salt, 1000, 64, 'sha512', (error, x) => {
        if (error) reject(error)

        resolve(x.toString('hex'))
      })
    })

    return reHash === hash
  }
}

export default new Hasher()
