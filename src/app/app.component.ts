import { Component } from '@angular/core';
import { ItemsService } from './service/http/item.service';
import { Item } from './model/Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'treeview-frontend';
  treeViewItems: Item[] = [];

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.getItems()
  }

  getItems = () => {
    this.itemsService.getAll()
      .subscribe(data => {
        this.treeViewItems = data;
        console.log(data)
      });
  }

}
