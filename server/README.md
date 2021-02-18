# 说明
nodejs环境`v15.8.0`

# 1.应用到的库
dependencies
- 1.jsonwebtoken
- 2.
dev
- 1.typescript
- 2.ts-node
- 3.nodemon

# 2.授权/认证
- 1. [理解OAuth 2.0](https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html)
- 2. [支持nodejs的OAuth库](https://oauth.net/code/nodejs/)
- 3. [OAuth2.0的四中授权方式](http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html)
    - 1. 授权码
    - 2. 密码
    - 3. 用户凭证
    - 4. 隐藏式
- 4. [OAuth 2.0 的一个简单解释](http://www.ruanyifeng.com/blog/2019/04/oauth_design.html)
- 5. [GitHub OAuth 第三方登录示例教程](http://www.ruanyifeng.com/blog/2019/04/github-oauth.html)
- 6. [在nodejs中实现oauth2.0](https://blog.logrocket.com/implementing-oauth-2-0-in-node-js/)


# 3. 进度
- 2021-02-09
- [ ] 1.要实现model里的3个方法，就要使用数据库或redis。目前先模仿example实现一个对象存储
  - [ ] 将`example`中的`db`,`token`,`client`分别写成单例模式

# 4.oauth2.0实现库-`oauth2-server`
- [oauth2-serverAPI文档](https://oauth2-server.readthedocs.io/en/latest/index.html)
- [基于nodejs的oauth2-server一个demo，演示从授权-认证-刷新token的流程](https://github.com/14gasher/oauth-example)

# 5.nodejs服务
- 1. [nodejs中不使用框架控制路由](https://www.geeksforgeeks.org/routing-in-node-js/)
