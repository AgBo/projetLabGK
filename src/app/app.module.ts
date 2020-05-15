import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SessionItComponent } from './session-it/session-it.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptiondisabledDirective } from './inscriptiondisabled.directive';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: SessionItemListComponent
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule'
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SessionItComponent,
    SessionItemListComponent,
    InscriptiondisabledDirective,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true }),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
