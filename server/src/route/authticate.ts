import {IncomingMessage, ServerResponse} from 'http'
import {oauthServer} from '../oauth2'
import OAuth2Server, {Request, Response} from 'oauth2-server'
import { IncomingMessageUtil } from '../utils/IncomingMessage'

/**
 * 认证：认证code，并生成token
 */
export default (req: IncomingMessage, res: ServerResponse): void => {
    oauthServer.authenticate()
}