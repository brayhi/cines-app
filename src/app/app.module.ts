import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CinesComponent } from './cines/cines.component';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { DetalleComponent} from './detalle/detalle.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CinesComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDkJoXDE-301o6-SK_B92k1cNJW1qLMTIE'
    }),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
