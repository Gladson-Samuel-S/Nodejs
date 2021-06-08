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
