import data from "../data/fhs.json"
import type {Tree_t, Treenode_t, TreeData} from "../type/interface"


function get_node(obj: TreeData): Treenode_t
{
    const end_point = obj.path.split("/");
    const level = end_point.length - 1;

    const d: Treenode_t = {
        obj,
        children: new Map(),
        childen_count: 0,
        level:level - 1,
        endpoint:end_point[level]
    }
    return(d)
}

function count_children(tree: Tree_t, node_level: number): number
{
    let children: number = 0;

    for(const node of tree.tree)
    {
        if(node.level == node_level + 1)
            children++;
    }
    return(children);
}

function set_children(tree: Tree_t)
{
    for (const node of tree.tree)
    {

        

        node.childen_count = count_children(tree, node.level);
    }
}

export function BuildTree(data: TreeData[]): Tree_t {

    const tree: Tree_t = {tree:[]};
    
    for (const obj of data)
    {
        const node = get_node(obj);
        tree.tree.push(node);
    }
    tree.tree.sort((a,b) => a.level - b.level)
    set_children(tree);
    return(tree);
}