import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TreeViewNodeComponent } from './component/app.treeview.node';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewNodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
