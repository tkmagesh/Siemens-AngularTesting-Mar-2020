import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeterService } from './services/greeter.service';
import { TimerService } from './services/timer.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    GreeterService,
    TimerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
