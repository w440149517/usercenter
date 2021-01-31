import fs,{readFileSync} from 'fs';

export const sslOption = {
    key: readFileSync('src/configs/key.pem'), // 私钥(必须使用绝对路径，不允许`~`代替)
    cert: readFileSync('src/configs/cert.pem'), // 证书
}