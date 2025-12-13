export interface TreeData {
    path:string;
    type:string;
    title:string;
    description:string;
    status:number;
}

export interface Treenode_t
{
    obj: TreeData;
    level:number;
    endpoint:string;
    children: Map<string,Treenode_t>;
    childen_count:number;
    
}

export interface Tree_t 
{
    tree: Treenode_t[];
}