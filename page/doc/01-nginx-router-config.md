**我的设置：**

在`vue3`中编译代码前需要在`vue.config.js`配置根路径，这样便可以正常页面。

例如，要访问的地址为`http://www.test.com/myapp`,需要配置
```js
module.exports = {
  publicPath: "/myapp/",
  outputDir: 'dist',// 编译后文件目录
};
```

将编译后的文件夹`dist`上传到服务器的`nginx/html/myapp`目录下，

**出现问题：**

当访问到`http://www.test.com/myapp/login`会导致页面404

**解决办法:**
 - 1.配置`nginx.conf`
 ```bash
    try_files $uri /oauth/index.html;
 ```
- `try_files`检索文件是否存在，先检查`$uri`,如果不存在对应的文件则转到`/oauth/index.html`目录下
- `$uri`是nginx内置命令，如果访问`http://www.test.com/myapp/login`，则`$uri='/myapp/login'`

**副作用：**
配置后会导致nginx内部的404.html，需要在`vue.comfig.js`中自己配置``{path: '*'}

 **参考文献：**
 - [HTML5 History 模式](https://router.vuejs.org/zh/guide/essentials/history-mode.html#nginx)
 - [vue-如何处理404路由](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1)

