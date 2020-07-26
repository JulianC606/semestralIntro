import SectionModel from '../models/Section'

export const getStructure = async (req, res) => {
  try {
    const structure = await SectionModel.find()
    res.json(structure)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: e })
  }
}

export const postStructure = async (req, res) => {
  const { body } = req
  const newPage = new SectionModel(body)
  try {
    await newPage.save()
    res.json(newPage)
  } catch (e) {
    res.status(500).json({ error: e })
  }
}
