# Node js

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

# Node Global Variable

Global functions/variables can be accessed with or without the global
For example setTimeout or global.setTimeout

``` javascript
console.log(__dirname)
console.log(__filename)
```

# Node Modules

Modules can be imported and used in a file using
	1. Require
	2. Import

To export something

``` javascript
module.exports = {
    people,
    age
}
```

# Node File system

We need to import fs module

Inorder to read a file we can use fs.readFile('path', (callback fn))

``` javascript
fs.readFile('./docs/Welcome.txt', (err, data) => {
    if(err) {
        console.log(err)
    }
    console.log(data.toString())
})
```

Writing files
``` javascript
fs.writeFile('./docs/Welcome.txt', 'Hello Gladson', () => {
    console.log('file written')
})
```

Directories
To check whether something exists or not, we can use fs.existsSync
``` javascript
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('Folder Created')
    })
} else {
    fs.rmdir('./assets', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('folder deleted')
    })
}
```

Deleting files
``` javascript
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err)    
        }
        console.log('file deleted')
    } )
}
```