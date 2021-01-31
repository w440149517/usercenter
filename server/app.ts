import { IncomingMessage, ServerResponse, RequestListener, Server } from 'http';
import {createServer} from 'https';
import {sslOption} from './src/configs/https'

const PORT: number = 12345;

const listner: RequestListener = (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.end('你好')
}
const server: Server = createServer({...sslOption}, listner);

server.listen(PORT, () => {
    console.log(`start server success, port=${PORT}`)
});