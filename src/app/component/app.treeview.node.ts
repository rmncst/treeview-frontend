import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../model/Item';
import { ItemsService } from '../service/http/item.service';

@Component({
  selector: 'app-treeview-node',
  templateUrl: './app-treeview-node.html',
  styleUrls: ['./app-treeview-node.css']
})
export class TreeViewNodeComponent 
{
    @Input() nodes: Item[] = [];
    @Output() itemRemoved = new EventEmitter();
    currentNodeEdit: string = null;

    constructor(private itemService: ItemsService) {
    }

    removeItem = (id: string) => {
      this.itemService.delete(id)
        .subscribe(res => this.emitItemRemovedEvent(res));
    }

    emitItemRemovedEvent(target) {
      this.itemRemoved.emit(target);
    }

    toggleEdit(id) {
      this.currentNodeEdit = id ? id : null;
    }

    isEditMode(id) {
      return this.currentNodeEdit == id;
    }
    
    updateItem(id: string, name: string) {
      console.log(id,name);
      this.toggleEdit(null);
    }

}
