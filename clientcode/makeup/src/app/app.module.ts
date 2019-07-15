import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//1.import the module
import { HttpModule } from '@angular/http';
import{FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingItemComponent
  ],
  imports: [
    //2. go next to data.service.ts
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
