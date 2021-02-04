import list from './bb'

// interface Customer {
//     children: Customer[];
//     [prop:string]: string | number;
// }
const test = (): any[] => {
    const res: any[] = [{ id: 0, children: [] }];
    const levels: any[][] = [res];
    let lv = 0;
    while(list.length > 0) {
        const level = levels[lv];
        let i = 0;
        while(i < list.length) {
            for (let j = 0; j < level.length; j ++) {
                if (list[i].parentId === level[j].id) {
                    level[j].children.push(list[i])
                    if (!levels[lv +1]) {
                        levels.push([])
                    }
                    levels[lv +1].push(list[i])
                    list.splice(i,1);// 移除
                } else {
                    i ++;
                }
            }
        }
        lv ++;
    }
    console.log(levels[0][0].children)
    return []
}
test()