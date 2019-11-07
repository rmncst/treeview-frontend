import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeViewNodeComponent } from './component/app.treeview.node';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ItemsService } from './service/http/item.service';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewNodeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
