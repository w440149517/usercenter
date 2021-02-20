import {IncomingMessage} from 'http';


export class IncomingMessageUtil{
    public url: URL;
    constructor(req: IncomingMessage){
        // 无法从req中取出`protocol`,目前写死
        this.url = new URL(`https://${req.headers.host}${req.url}`)
    }
    /**
     * 获取query对象
     */
    public getQueryJson ():{[key: string]: any}{
        const json: {[key: string]: any} = {}
        for (let key of this.url.searchParams.keys()) {
            const value = this.url.searchParams.get(key);
            json[key] = value;
        }
        return json;
    }
}