# Getting Started

Go to mongo db atlas create a cluster
https://www.mongodb.com/cloud/atlas

Add a user and the ip address

# Mongoose

```javascript
  npm install mongoose
  const mongoose = require("mongoose")
```

## Connecting to the cluster

```javascript
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err))
```

## Creating a Schema in MongoDB

const mongoose = require("mongoose")
const Schema = mongoose.Schema

```javascript
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)
```

By using timestamps mongoose will automatically add createdAt and updatedAt
Key value pairs

## Creating a model

```javascript
const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog
```

# Adding data to the collections

blog.save will save it to the database simple as that

```javascript
app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "Blog 2",
    snippet: "Blog 2",
    body: "more about Blog 2",
  })
  blog
    .save()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})
```

# Querying from the database

```javascript
app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result)
    })
    .catch((err) => {
      console.log(err)
    })
})
```

# POST Request

Listen for POST request

To get the data from the form we have to use a middleware to get it from the POST method.

```javascript
app.use(express.urlencoded({ extended: true }))
```

The req.body has access to the form data in json format

```javascript
app.post("/blogs", (req, res) => {
  const blog = new Blog(req.body)
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs")
    })
    .catch((err) => {
      console.log(err)
    })
})
```

Note:- The above code saves the blog to the database and redirects to all blogs page. Redirects happen only when dealing with form data.

# DELETE Request

Client side request to the browser

```javascript
const trashcan = document.querySelector(".delete")
trashcan.addEventListener("click", (e) => {
  const endpoint = `/blogs/${trashcan.dataset.doc}`
  fetch(endpoint, {
    method: "DELETE",
  })
    .then((response) => {
      response.json().then((data) => (window.location.href = data.redirect))
    })
    .catch((err) => console.log(err))
})
```

From the browser we are asking node js to delete that particular blog with that id
Node js sends a response in json ie the redirect endpoint

```javascript
app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" })
    })
    .catch((err) => console.log(err))
})
```

# MVC

Keeps code modular, reusable and easier to read.

Views -> The files sent to the browser that the user can see.
Model -> Database Model
Controller -> Controller forms the link between Model and views.
