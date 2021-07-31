import joi from 'joi'

function userValidator(user: any) {
  const schema = joi.object({
    firstName: joi.string().min(1).max(30).required().label('First Name'),
    lastName: joi.string().min(1).max(30).required().label('Last Name'),
    username: joi.string().min(6).max(30).required().label('Username'),
    email: joi.string().email().required().label('Email'),
    password: joi.string().min(6).max(50).required().label('Password'),
  })

  return schema.validate(user)
}

export function validateUserCredentials(credentials: any) {
  const schema = joi.object({
    id: joi.string().required().label('Username/Email'),
    password: joi.string().min(6).max(50).required().label('Password'),
  })

  return schema.validate(credentials)
}

export default userValidator
