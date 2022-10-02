import express from "express";
import {
  registerUser,
  loginUser,
  getMe,
} from "../controllers/userController.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello From user Endpoint");
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", getMe);

export default router;
