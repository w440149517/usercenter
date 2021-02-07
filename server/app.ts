import { Console } from 'console';
import { IncomingMessage, ServerResponse, RequestListener, Server } from 'http';
import {createServer} from 'https';
import { argv } from 'process';
import {sslOption} from './src/configs/https'
import {routerDispatcher} from './src/route/dispatcher'


console.log.apply(this,argv)
const PORT: number = 12345;

const listner: RequestListener = (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Content-Type', 'application/json');
    routerDispatcher(req,res);
}
const server: Server = createServer({...sslOption}, listner);

server.listen(PORT, () => {
    console.log(`start server success, port=${PORT}`)
});