import fs,{readFileSync} from 'fs';
/**
 * 注意：生成的ssl证书是没有机构签名的，在chrome浏览器中报错，无法访问，
 * 可以尝试fireFox浏览器
 * 具体查看：https://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate
 */
export const sslOption = {
    key: readFileSync('src/configs/key.pem'), // 私钥(必须使用绝对路径，不允许`~`代替)
    cert: readFileSync('src/configs/cert.pem'), // 证书
}