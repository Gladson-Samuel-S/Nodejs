# Creating a Server

Generally, When we type an address( ie Google.com ) in the browser It sends a request( GET request ) to the server. It sends a web page as a response.

With Node js we can create our own server where we can manage all the requests which are
Made to our website.

``` javascript
const http = require('http')


const server = http.createServer((req, res) => {
    console.log('request made')
})


server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})

```