/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UtilsModule } from './utils/utils.module';
import { HttpClientModule } from '@angular/common/http';

import { BugTrackerModule } from './bug-tracker/bug-tracker.module';
/* Components */
import { AppComponent } from './app.component';

/* Pipes */


/* Services */


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    UtilsModule,
    BugTrackerModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
