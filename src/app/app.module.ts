import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { SeriesComponent } from './components/series/series.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { InsertpersonajeComponent } from './components/insertpersonaje/insertpersonaje.component';
import { UpdatepersonajeComponent } from './components/updatepersonaje/updatepersonaje.component';
import { SeriesService } from './services/series.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SeriesComponent,
    HomeComponent,
    InsertpersonajeComponent,
    UpdatepersonajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, routing

  ],
  providers: [appRoutingProviders , SeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
