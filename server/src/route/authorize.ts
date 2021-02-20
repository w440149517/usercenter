import {IncomingMessage, ServerResponse} from 'http'
import {oauthServer} from '../oauth2'
import OAuth2Server, {Request, Response} from 'oauth2-server'
import { IncomingMessageUtil } from '../utils/IncomingMessage'
// 授权，返回code码
export default (req: IncomingMessage, res: ServerResponse) => {
    // console.log('headers=',req.headers)
    const request = {
        headers: req.headers,
        method: req.method,
        query: new IncomingMessageUtil(req).getQueryJson()
    }
    const response = { headers: res.getHeaders()}
    const options: OAuth2Server.AuthorizeOptions = {
        allowEmptyState: true,
        authenticateHandler: {
            handle: (req1:Request, res1:Response):OAuth2Server.User => {
                console.log('handle()执行了')
                return {user:'wuchao_user'}
            }
        }
    }
    oauthServer.authorize(new Request(request), new Response(response), options).then(codeObj => {
        console.log('code=',codeObj)
        res.end(codeObj.authorizationCode)
    })
}