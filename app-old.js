const http = require('http')

const PORT = 8080

http.createServer((req, res) => {
    // res.setHeader('Counter-Disposition', 'attachment; filename=lista-csv')
    // res.writeHead(200, {'Content-Type': 'application/json'})

    // const person = {
    //     id: 1,
    //     name: "Jordi"
    // }

    // console.log(req)
    // res.write(JSON.stringify(person))
    res.write('Hello world')
    res.end()
})
.listen(PORT)

console.log("Listenng to port", PORT)