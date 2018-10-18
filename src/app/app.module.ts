import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { HomeComponent } from './home/home.component';
import { CinesComponent } from './cines/cines.component';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkJoXDE-301o6-SK_B92k1cNJW1qLMTIE'
    }),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
