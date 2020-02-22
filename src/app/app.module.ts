import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PresentationModule } from './presentation/presentation.module';

@NgModule({
  declarations: [
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    CoreModule,
    PresentationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
