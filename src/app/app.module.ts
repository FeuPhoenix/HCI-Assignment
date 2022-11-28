import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { ScndpageComponent } from './scndpage/scndpage.component';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstpageComponent,
    ScndpageComponent,
    ThirdpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
