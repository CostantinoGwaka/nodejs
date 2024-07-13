
const http = require('http');

class NotificationService {
    static notifyError(response, error) {
        // response.writeHead(300, { 'Content-Type': 'application/json' });
        // response.end(JSON.stringify({ error }));

        http.createServer((res) => {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        });
    }
}

module.exports = NotificationService;