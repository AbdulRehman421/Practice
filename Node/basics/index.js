// HTTP

const http = require('http');
const fs = require('fs')
const path = require('path');

const app = http.createServer((request, response) => {
    console.log(request.url)
    response.writeHead(200, {
        'Content-type': 'text/html'
    })

    let filePath = path.join(__dirname, 'public', request.url === '/' ? 'index.html' : request.url)
    let ext = path.extname(filePath)
    let contentType = 'html'
    if (!ext) {
        filePath += '.html'
    }
    console.log("sec");
    switch (ext) {
        case '.css':
            contentType = 'text/css';
            break
        case '.js':
            contentType = 'text/javascript';
            break;
        default:
            contentType = 'text/html';
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, content) => {
                if (err) {
                    response.writeHead(500)
                    response.end('error')
                } else {
                    response.writeHead(404, {
                        'Content-Type': contentType
                    })
                    response.end(content)
                }

            })

        }
        else {
            response.writeHead(200, {
                'Content-Type': contentType
            })
            response.end(content);


        }


    })

})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listining at  ${PORT} `)
})

