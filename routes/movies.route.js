import express from "express"
import { createMovie, deleteMovieById, getMovies, getMoviesByUser } from "../controllers/movies.controller.js"
import { authMiddleware } from "../middlewares/authMIddleware.js"
const router = express.Router()

router.get("/", getMovies)
router.post("/", authMiddleware, createMovie)
router.get("/:userID", getMoviesByUser)
router.delete("/:movieID", authMiddleware, deleteMovieById)

export default router