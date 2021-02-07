import {IncomingMessage, ServerResponse} from 'http'
// 登陆
export default (req: IncomingMessage, res: ServerResponse) => {
    console.log('登录页')
    res.end('登陆');
}