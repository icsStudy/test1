import express from 'express'
import mongoConnect from "./config/db.js"

// routes
import authRoute from "./routes/auth.route.js"
import usersRoute from "./routes/users.route.js"
import moviesRoute from "./routes/movies.route.js"

const app = express()

app.use(express.json())

app.use("/auth", authRoute)
app.use("/users", usersRoute)
app.use("/movies", moviesRoute)

app.use("/", (res) => {
    res.send("fallback..404 - not found")
})

mongoConnect().then(() => app.listen(3000, () => console.log("Server is running..."))).catch(console.error)