import { Console } from 'console';
import { IncomingMessage, ServerResponse, RequestListener, Server,ClientRequest } from 'http';
import Login from './login'
import Regist from './regist';
import {IncomingMessageUtil} from '../utils/IncomingMessage'

interface RouteType {
    [prop: string]: (req: IncomingMessage, res: ServerResponse) => void
}
const routeMap: RouteType = {
    '/': Login,
    '/login': Login,
    '/regist': Regist
}
/**
 * 路由分发器
 * @param req 
 * @param res 
 */
export const routerDispatcher = (req: IncomingMessage, res: ServerResponse): void => {
    const util = new IncomingMessageUtil(req);
    // 没有的接口不分发，例如`/favicon.ico`
    routeMap[util.url.pathname] && routeMap[util.url.pathname].apply(this, [req,res]);
}