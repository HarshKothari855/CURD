import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { HomeComponent } from './home/home.component';
import { FirstLetterCapitalPipe } from './pipe/first-letter-capital.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    PagenotfoundComponent,
    ReadComponent,
    UpdateComponent,
    HomeComponent,
    FirstLetterCapitalPipe
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
