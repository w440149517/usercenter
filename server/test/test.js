var flag = 2;
var res = flag === 1 ? flag-- : (flag = flag*2, flag+1);

console.log(res)