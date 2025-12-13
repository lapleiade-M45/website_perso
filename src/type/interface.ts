export default interface Treenode
{
    path:string;
    name:string;
    desc:string;
    children: Map<string,Treenode>;
    childen_count:Number;
}