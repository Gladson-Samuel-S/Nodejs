# Request and Response

When the client requests for some data we either send images, html, text or links etc…
this depends.But Inorder to send HTML to the webpage

``` javascript
    res.setHeader('Content-Type', 'text/html')
	
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
            res.end(data)
        }
    })

```

# Routing in Node js

``` javascript
        switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        case '/about-me':
            res.statusCode = 301
            res.setHeader('location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }
```