import express from 'express'
import { getStructure, postStructure } from '../controllers/structure.controller'
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json({ title: 'Hola' })
})

router.route('/structure')
  .get(getStructure)
  .post(postStructure)

export default router
