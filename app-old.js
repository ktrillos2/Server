const http = require("http");

http.createServer((request, response) => {

    console.log(request,response);

    response.write("hola mundo")
    response.end();
})
    .listen(8080);

    console.log("escuchando el puerto, 8080");