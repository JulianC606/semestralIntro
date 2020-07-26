import { Schema, model } from 'mongoose'

const sectionSchema = new Schema({
  title: String,
  link: String,
  pages: [{
    title: String,
    link: String
  }]
})

const SectionModel = model('Section', sectionSchema)

export default SectionModel
