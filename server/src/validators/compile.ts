import joi from 'joi'

function compileInputValidator(obj: any) {
  const schema = joi.object({
    content: joi.string().required().label('Content'),
    language: joi.string().required().label('Language'),
    versionIndex: joi.number().required().label('Version Index'),
  })

  return schema.validate(obj)
}

export default compileInputValidator
