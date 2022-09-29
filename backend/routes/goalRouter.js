import express from 'express';
// import goalController from '../controllers/goalController.js';
import {
  getGoals,
  setGoal,
  getGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController.js';

const router = express.Router();

router.route('/').get(getGoals).post(setGoal);
router.route('/:id').get(getGoal).put(updateGoal).delete(deleteGoal);

export default router;
