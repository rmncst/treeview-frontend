import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-treeview-node',
  templateUrl: './app-treeview-node.html',
  styleUrls: ['./app-treeview-node.css']
})
export class TreeViewNodeComponent 
{
    @Input() nodes: TreeViewNode[] = [];

}


class TreeViewNode {
    id: string;
    description: string;
    open: boolean;
    children?: TreeViewNode[];
  }