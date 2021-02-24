import OAuth2Server, {Request, Response} from 'oauth2-server'
import {IncomingMessage, ServerResponse} from 'http';
import {IncomingMessageUtil} from './IncomingMessage' 

export class OAuthUtil {
    getRequest(req: IncomingMessage,res: ServerResponse): Request{
        return new Request({
            headers: req.headers,
            method: req.method,
            query: new IncomingMessageUtil(req).getQueryJson()
        })
    }
    getResponse(req: IncomingMessage,res: ServerResponse): Response{
        return new Response({ headers: res.getHeaders()})
    }
    getAuthorizeOptions(req: IncomingMessage,res: ServerResponse): OAuth2Server.AuthorizeOptions{
        return {
            allowEmptyState: true,
            authenticateHandler: {
                handle: (req1:Request, res1:Response):OAuth2Server.User => {
                    console.log('handle()执行了')
                    return {user:'wuchao_user'}
                }
            }
        }
    }
}