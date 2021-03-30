import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ElapsedPipe } from './pipes/elapsed.pipe';
import { GreeterService } from './services/greeter.service';
import { TimerService } from './services/timer.service';

import moment from 'moment';

@NgModule({
  declarations: [
    AppComponent,
    ElapsedPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide : GreeterService, useClass:GreeterService },
    TimerService,
    { provide: 'MOMENT', useValue : moment}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
