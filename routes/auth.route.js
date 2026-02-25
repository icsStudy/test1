import express from "express"
import { login, register, verifyEmail } from "../controllers/auth.controller.js";
const router = express.Router()

router.post("/register", register)
router.post("/verify", verifyEmail)
router.post("/login", login)

// module.exports = router;
export default router;