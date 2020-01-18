import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/principal/app.component';
import { ContainerComponent } from './components/container/container.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { HttpClientModule} from '@angular/common/http';
import { ListService} from './services/list.service';
import { RouterModule, Routes } from '@angular/router';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';






const rutas: Routes = [
{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
  
},
{
  path: 'detail',
  component: DetailComponent
},
{
  path: 'home',
  component: ContainerComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent,
    ContainerComponent,
    DetailComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas),
    FormsModule,
   
    
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
