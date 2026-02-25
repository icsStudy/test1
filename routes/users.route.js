import express from "express"
import { updateUser, deleteUser, getUserById, getUsers } from "../controllers/users.controller.js"
import { authMiddleware } from "../middlewares/authMIddleware.js"
import { checkPermissions } from "../middlewares/checkPermissions.js"
const router = express.Router()

// Get - get all users
router.get("/", authMiddleware, getUsers)

// Get - get singular user
router.get("/:id", authMiddleware, getUserById)

// PUT - updating a user, when requesting need 
// to trnasfer in the body request all the user object
// PATCH  - updating a user, when requesting 
// need to transfer in the body request only the requested properties to update 
router.patch("/:id", authMiddleware, checkPermissions, updateUser)

// DELETE - deleting user by id
router.delete("/:id", authMiddleware, checkPermissions, deleteUser)

// module.exports = router;
export default router;