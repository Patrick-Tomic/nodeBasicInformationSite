
const http = require('http')
const url = require('url')
const fs = require('fs')

const page404 = fs.readFileSync('404.html','utf-8', (err,data) =>{
    if(err) throw err
    return data
})

http.createServer((req,res) =>{
    const q = url.parse(req.url,true)
    let fileName = ''
    if(q.pathname === '/'){
        fileName = '.','/index.html'
    } else {
        fileName = '.',q.pathname
    }

    fs.readFile(filename, (err,data) =>{
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write(page404)
            return res.end()
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.write(data)
            return res.end()
        }
    })
}).listen(8080)