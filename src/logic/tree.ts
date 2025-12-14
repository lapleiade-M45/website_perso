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

/* 
    Pour determiner le nombre de children , je compare le path de mon noeud courant avec le path du noeud_source sur sizeof(char * noeud_source_len) bytes.
    Si les path son egaux, j'incremente le compteur.
    En fin de processus, je retire 1 au compte correspondant au path du current_noeud dans l'arbre
*/

function set_children(tree: Tree_t)
{
    for (const current_node of tree.tree)
    {
        let children: number = 0;

        for(const node of tree.tree)
        {
            if(node.obj.path.slice(0, current_node.obj.path.length) == current_node.obj.path)
                children++;
        }
        current_node.childen_count = children - 1;
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