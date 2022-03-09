
const handleRequest = (request, response) => {
    
    const url = request.url;
    const method = request.method;

    response.setHeader('Content-Type', 'text/html');

    if(url === '/'){
        response.write('<html><body>');
        response.write('<form action="/create-user" method="POST"><input type="submit" value="submit"></form>');
        response.write('</body></html>');
        return response.end();
    } else if (url === '/users'){
        response.write('<html><body>');
        response.write('<ul><li>User 1</li><li>User 2</li><li>User 2</li></ul>');
        response.write('</body></html>');
        return response.end();
    } else if (url === '/create-user'){
        console.log('user created');
        response.statusCode = 302;
        response.setHeader('Location', '/');
        return response.end();
    }
};


module.exports = handleRequest;