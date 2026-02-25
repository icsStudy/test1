import { Movie } from "../models/Movie.js"

export const createMovie = async (req, res) => {
    try {
        const movie = new Movie({
            ...req.body,
            createdBy: req.user.id

        })
        await movie.save()
        res.status(201).json({
            status: 201,
            message: "New movie created successfuly",
            data: null
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "Failed creating a new movie",
            data: null
        })
    }
}

export const getMovies = async (_, res) => {
    try {
        const movies = await Movie.find().populate("createdBy", "name email")
        res.status(200).json({
            status: 200,
            message: "All movies fetched",
            data: movies
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "Failed fetching movies",
            data: null
        })
    }
}

export const getMoviesByUser = async (req, res) => {
    try {
        const userId = req.params.userID
        const movies = await Movie.find({ createdBy: userId })
        res.status(200).json({
            status: 200,
            message: `All movies of user with id: ${userId} fetched`,
            data: movies
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 500,
            message: "Failed fetching movies",
            data: null
        })
    }
}

export const deleteMovieById = async (req, res) => {
    try {
        const { id: userID } = req.user
        const { movieID } = req.params

        const movie = await Movie.findById(movieID)
        if (!movie) {
            return res.status(400).json({
                status: 400,
                message: "Movie not found",
                data: null
            })
        }

        // console.log(String(movie.createdBy), userID)
        if (String(movie.createdBy) !== userID) {
            return res.status(401).json({
                status: 401,
                message: "Permission denied",
                data: null
            })
        }

        await Movie.findByIdAndDelete(movieID)
        return res.status(200).json({
            status: 200,
            message: "Movie is successfuly deleted",
            data: null
        })
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(500).json({
                status: 500,
                message: "Id is not mongoose standart Id for casting",
                data: null
            })
        }
        res.status(500).json({
            status: 500,
            message: "Server Error",
            data: null
        })
    }
}

