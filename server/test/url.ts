import {parse,UrlWithStringQuery} from 'url';
import qs, {ParsedUrlQuery} from 'querystring'


const urlStr = 'https://m.shop.com/home/share?id=4433&name=%E6%9D%8E%E5%A4%87&directCompanyId=&mobile=18951431099#detail'
const path = '/home/?time=23455'

const url:UrlWithStringQuery = parse(path)
const query:ParsedUrlQuery = qs.parse(url.query!);

const url1 = new URL(urlStr)


// 测试:yarn run ts-node test/url.ts
console.log('url=',url)

console.log('************以下是URL************')

console.log('URL=', url1)
console.log('querystring=',qs.parse(path))





