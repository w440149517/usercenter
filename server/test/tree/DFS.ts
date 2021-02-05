const list = [
    { "id": 20, "parentId": 0 },
    { "id": 21, "parentId": 0 },
    { "id": 22, "parentId": 0 },
    { "id": 23, "parentId": 0 },
    { "id": 24, "parentId": 20 },
    { "id": 25, "parentId": 20 },
    { "id": 26, "parentId": 24 },
    { "id": 27, "parentId": 24 },
    { "id": 28, "parentId": 21 },
    { "id": 29, "parentId": 21 },
    { "id": 30, "parentId": 29 },
    { "id": 31, "parentId": 30 },
    { "id": 32, "parentId": 31 }
]

// 深度优先搜索
const dfs = (): any[] => {
    const loop = (p: any,id = 0) => {
        let i = 0;
        while(i < list.length) {
            if (list[i].parentId === id) {
                
                list.splice(i,1);// 移除
                break;
            }
        }
    }
    for(let i = 0; i < list.length; i ++){
        
    }
    return []
}
test()