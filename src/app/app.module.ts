import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { VideoServiceService } from './video-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ViewComponent } from './view/view.component';
import { SafePipe } from './safe.pipe';
import { UpdateComponent } from './update/update.component';
import { EditComponent } from './edit/edit.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Add', component: AddComponent },
  { path: 'View', component: ViewComponent },
  { path: 'Update', component: UpdateComponent },
  { path: 'Edit', component: EditComponent },


  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ViewComponent,
    SafePipe,
    UpdateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule,HttpModule
  ],
  providers: [VideoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
