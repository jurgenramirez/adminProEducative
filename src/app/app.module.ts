import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './share/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './share/header/header.component';
import { NopagefoundComponent } from './share/nopagefound/nopagefound.component';
import { SidebarComponent } from './share/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    NopagefoundComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
