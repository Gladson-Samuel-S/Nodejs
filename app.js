const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const blogRoutes = require("./routes/blogRoutes")

dotenv.config()

// express app
const app = express()

// setting view engine
app.set("view engine", "ejs")

const dbURI = process.env.API_KEY

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))

// middleware and public
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.redirect("/blogs")
})

app.get("/about", (req, res) => {
  res.render("about", { title: "About" })
})

// blog routes
app.use("/blogs", blogRoutes)

app.use((req, res) => {
  res.status(404).render("404", { title: "404" })
})
