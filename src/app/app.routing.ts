
import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { SeriesComponent } from "./components/series/series.component";
import { HomeComponent } from "./components/home/home.component";
import { InsertpersonajeComponent } from "./components/insertpersonaje/insertpersonaje.component";
import { UpdatepersonajeComponent } from "./components/updatepersonaje/updatepersonaje.component";

const appRoutes: Routes=[
    {path: "", component: HomeComponent},
    {path: "series/:idseries", component: SeriesComponent},
    {path: "insert", component: InsertpersonajeComponent},
    {path: "update", component: UpdatepersonajeComponent},
]
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);