import { NgModule } from "@angular/core";

//IMpots
import { SharedModule } from '../share/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
  
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})
export class PagesModule{
    
}