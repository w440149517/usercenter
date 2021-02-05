// import list from './longJson'
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
// 广度优先搜索
const test = (): any[] => {
    const heads: any[] = [{ id: 0, children: [] }];
    const levels: any[][] = [heads];// 按层存储，每层都是一个数组
    let lv = 0;// 层级
    while (list.length > 0) {
        const level = levels[lv];
        // 遍历第j层，找该层第j个元素的children
        for (let j = 0; j < level.length; j++) {
            let i = 0;
            // 遍历原数据
            while (i < list.length) {
                if (list[i].parentId === level[j].id) {
                    if (!level[j].children) { level[j].children = []; }
                    level[j].children.push(list[i]);// 挂到父级节点下
                    if (!levels[lv + 1]) { levels.push([]); }
                    levels[lv + 1].push(list[i]);// 孩子属于下一层
                    list.splice(i, 1);// 移除
                } else {
                    i++; // 指针继续
                }
            }
        }
        lv++; // 层级
    }
    return levels[0][0].children;
}


test()