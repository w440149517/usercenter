# nvm 一个node包管理器
`nvm`是一个针对nodejs的版本管理器，目的是允许用户下载不同的版本，并且在不通的shell下运行。支持所有的`posix`系统，尤其是`unix`, `macOS`, ` windows WSL`。
## 安装nvm
- 1.访问地址`https://github.com/nvm-sh/nvm/blob/v0.37.2/install.sh`，点击`raw`,下载改文件`install.sh`
- 2.将`install.sh`文件保存在家目录`~`,运行此命令:`sh ~/install.sh`
- 3.打开`~/.zshrc`,添加命令`export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`
- 4.输入`nvm -v`，输出版本号`0.37.2`说明安装成功

## 常用命令
命令|解释|举例
--|--|--
`nvm install` | 下载node，可以指定版本号，不指定下载最新版 | `nvm install --lts`下载最新的LTS版本
`nvm ls` | 列出已下载的所有版本
`nvm use` | 切换node版本 | `nvm use --lts`切换到最新的LTS版本
`nvm run` | 使用指定版本的node运行js文件 | `nvm run 6.10.3 app.js` | 使用`6.10.3`版本的node运行`app.js`
`nvm set-colors` | 设置颜色 | `nvm set-colors cgYmW`,设置字体有蓝绿色/绿色/粗黄色/洋红色/白色



**参考文献**
- [nvm-github](https://github.com/nvm-sh/nvm)