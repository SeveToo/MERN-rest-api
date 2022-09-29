export const getGoals = (req, res) => {
  res.status(200).json({ message: `Get Goals` });
};
export const getGoal = (req, res) => {
  res.status(200).json({ message: `goal ${req.params.id}` });
};
export const setGoal = (req, res) => {
  if (!req.body.goal) {
    res.status(400);
    throw new Error(`Pleas add a goal`);
  }
  console.log(req.body);
  res.status(201).json({ message: `Set Goals` });
};
export const updateGoal = (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`,
  });
};
export const deleteGoal = (req, res) => {
  res.status(200).json({
    message: `Delete goal ${req.params.id}`,
  });
};

export default {
  getGoals,
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
