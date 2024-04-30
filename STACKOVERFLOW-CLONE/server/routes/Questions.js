import express from 'express'
import { AskQuestion, getAllQuestions, deleteQuestion, voteQuestion } from '../controllers/Questions.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.route('/Ask').post(auth, AskQuestion)
router.route('/get').get(getAllQuestions)
router.route('/delete/:id').delete(auth, deleteQuestion)
router.route('/vote/:id').patch(auth, voteQuestion)

export default router
