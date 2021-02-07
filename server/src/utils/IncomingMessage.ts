import {IncomingMessage} from 'http';

export class IncomingMessageUtil{
    public url: URL;
    constructor(req: IncomingMessage){
        // 无法从req中取出`protocol`,目前写死
        this.url = new URL(`https://${req.headers.host}${req.url}`)
    }
}