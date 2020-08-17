import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from "./pages/about/about.component";
import { AppDisplayComponent } from "./pages/app-display/app-display.component"

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'programming', children: [
      { path: '', component: HomeComponent},
      { path: ':project', component: AppDisplayComponent}
    ]
  },
  { path: 'engineering', children: [
      { path: '', component: HomeComponent},
      { path: ':project', component: AppDisplayComponent}
    ]
  },
  { path: 'security', children: [
      { path: '', component: HomeComponent},
      { path: ':project', component: AppDisplayComponent}
    ]
  },
  { path: 'about', component: AboutComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

