import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treeview-frontend';
  treeViewItems: TreeViewNode[] = [
    { 
      id: '1212', 
      description: 'first level', 
      open: false,
      children: [
        { id: '12312', description: 'second level', open: false }
      ]
    }
  ]

}

class TreeViewNode {
  id: string;
  description: string;
  open: boolean;
  children?: TreeViewNode[];
}