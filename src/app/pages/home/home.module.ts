import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent, GalleryModal } from './home.component';
import { CategoriesComponent } from '../../categories/categories.component'
import { ProjectsComponent } from '../../projects/projects.component'


@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    ProjectsComponent,
    GalleryModal,
  ],
  exports: [
    HomeComponent,
    CategoriesComponent,
    ProjectsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatGridListModule,
    MatIconModule
  ],
  entryComponents: [GalleryModal]
})
export class HomeModule { }
