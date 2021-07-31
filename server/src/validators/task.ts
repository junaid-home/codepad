import joi from 'joi'

function taskValidator(task: any) {
  const schema = joi.object({
    name: joi.string().min(3).max(30).label('Name'),
    content: joi.string().label('Content'),
    owner: joi.string().label('Owner'),
    language: joi.string().label('Language'),
    thumbnailUrl: joi.string().label('Thumbnail Url'),
  })

  return schema.validate(task)
}

export default taskValidator
