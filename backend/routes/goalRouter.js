import express from 'express';
import goalController from '../controllers/goalController.js';

const router = express.Router();

router.get('/', goalController.getGoals);
router.get('/:id', goalController.getGoal);
router.post('/', goalController.setGoal);
router.put('/:id', goalController.updateGoal);
router.delete('/:id', goalController.deleteGoal);

export default router;
