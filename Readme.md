# Working with view engines

Set view Engine

``` javascript
    app.set('view engine', 'ejs')
```

To render ejs files with express

``` javascript
    res.render('index', {title: 'Home', blogs})
```

Including and displaying ejs

``` javascript
    <%- include('./partials/head.ejs') %>

    <% if (blogs.length > 0) { %>
      <% blogs.forEach(blog => { %>
        <h3 class="title"><%= blog.title %></h3>
        <p class="snippet"><%= blog.snippet %></p>
      <% }) %>
    <% } else { %>
      <p>There are no blogs to display...</p>
    <% } %>
```