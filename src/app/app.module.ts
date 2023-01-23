import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Routes, RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SingleNewsComponent } from './single-news/single-news.component';


export const appRout:Routes=[
  {path:'', component:AppComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    SingleNewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRout)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
