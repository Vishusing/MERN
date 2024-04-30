import express from 'express'
import { postAnswer, deleteAnswer } from '../controllers/Answers.js'
import auth from '../middlewares/auth.js';

const router = express.Router();

router.route('/post/:id').patch(auth, postAnswer)
router.route('/delete/:id').patch(auth, deleteAnswer)

export default router
