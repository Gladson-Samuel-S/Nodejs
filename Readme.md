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

## Routing in Node js

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

# Initializing Express

``` javascript
    // express app
    const app = express()

    // listen for request
    app.listen(3000)
```

## Listening for get Requests

``` javascript
    app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname})
})

```
1. No status required
2. Header content is also not required

## Redirects
``` javascript
    app.get('/about-us', (req, res) => {
        console.log(req.url)
        res.redirect('/about')
    })
```
## 404 page
``` javascript
    app.use((req, res) => {
        res.status(404).sendFile('./views/404.html', {root: __dirname})
    })
```