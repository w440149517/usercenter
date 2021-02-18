import {IncomingMessage, ServerResponse} from 'http'
import {oauthServer} from '../oauth2'
import {Request, Response} from 'oauth2-server'
import { IncomingMessageUtil } from '../utils/IncomingMessage'
// 授权，返回code码
export default (req: IncomingMessage, res: ServerResponse) => {
    console.log('req=',req)
    const request = {
        headers: {},
        method: '',
        query: new IncomingMessageUtil(req).url.searchParams
    }
    oauthServer.authorize(new Request(req), new Response(res)).then(codeObj => {
        console.log('code=',codeObj)
    })
}