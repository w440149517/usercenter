
nodejs支持创建https服务，如果在`localhost`下需要[自己制作免费的https证书](https://letsencrypt.org/zh-cn/docs/certificates-for-localhost/)

```js

import {sslOption} from './src/configs/https'
import { IncomingMessage, ServerResponse, RequestListener, Server } from 'http';
import {createServer} from 'https';
//证书
const sslOption = {
    key: readFileSync('src/configs/localhost.key'), // 私钥(必须使用相对路径，不允许`~`代替)
    cert: readFileSync('src/configs/localhost.crt') // 证书
}
// 监听
const listner: RequestListener = (req: IncomingMessage, res: ServerResponse) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({name:'你好'}))
}
// 创建server对象
const server: Server = createServer({...sslOption}, listner);
// 启动
server.listen(PORT, () => {
    console.log(`start server success, port=${PORT}`)
});
```


**参考文献**
- [创建`localhost`的https证书]https://letsencrypt.org/zh-cn/docs/certificates-for-localhost/)
- 2. [csdn可翻译-使用原生nodejs创建https服务-2步走](https://nodejs.org/en/knowledge/HTTP/servers/how-to-create-a-HTTPS-server/)
- 3. [开启https服务后，chrome浏览器访问`https://localhost`提示不安全警告`NET::ERR_CERT_INVALID`,处理方案]()