import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ElapsedPipe } from './pipes/elapsed.pipe';
import { GreeterService } from './services/greeter.service';
import { TimerService } from './services/timer.service';

import moment from 'moment';

import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  declarations: [
    AppComponent,
    ElapsedPipe,
    GreeterComponent
  ],
  imports: [
    BrowserModule
    , HttpClientModule
  ],
  providers: [
    { provide : GreeterService, useClass:GreeterService },
    TimerService,
    { provide: 'MOMENT', useValue : moment}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
