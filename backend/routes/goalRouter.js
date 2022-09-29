import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
  res.status(200).json({message: `Get Goals`});
})
router.get('/:id', (req,res) => {
  res.status(200).json({message: `goal ${req.params.id}`});
})
router.post('/', (req,res) => {
  res.status(201).json({message: `Set Goals`});
})
router.put('/:id', (req,res) => {
  res.status(200).json({message: `Update goal ${req.params.id}`});
})
router.delete('/:id', (req,res) => {
  res.status(200).json({message: `Delete goal ${req.params.id}`});
})

export default router;
