import data from "../data/fhs.json"

interface TreeData {
    path:string;
    type:string;
    title:string;
    description:string;
    status:number;
}

interface Treenode
{
    data: TreeData;
    children: Map<string,Treenode>;
    childen_count:number;
    
}

function get_node(data: TreeData): Treenode
{
    const d: Treenode = {
        data,
        children: new Map(),
        childen_count: 0
    }
    return(d)
}

export function BuildTree(data: TreeData[]) {

    for (const d of data){
        const node: Treenode = get_node(d);
        console.log(node)
    }

}