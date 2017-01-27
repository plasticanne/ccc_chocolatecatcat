import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './route'
import { AppComponent, cat_schoolComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ],
  declarations: [ AppComponent, cat_schoolComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
