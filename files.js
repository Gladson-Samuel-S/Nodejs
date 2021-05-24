const fs = require('fs')

// File manipulation
// reading files
fs.readFile('./docs/Welcome.txt', (err, data) => {
    if(err) {
        console.log(err)
    }
    console.log(data.toString())
})

// writing files
fs.writeFile('./docs/Welcome.txt', 'Hello Gladson', () => {
    console.log('file written')
})

// if there is no file then node creates one

// directories
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

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err)    
        }
        console.log('file deleted')
    } )
}