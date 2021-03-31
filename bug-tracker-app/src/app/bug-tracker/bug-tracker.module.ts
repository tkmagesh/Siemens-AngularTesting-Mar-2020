import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BugTrackerComponent} from './bug-tracker.component';
import { BugEditComponent } from './components/bug-edit.component';
import { BugStatsComponent } from "./components/bug-stats.component";
import { ClosedCountPipe } from './pipes/closedCount.pipe';
import { UtilsModule } from '../utils/utils.module';
import { BugOperationsService } from './services/bugOperations.service';
import { BugApiService } from './services/bugApi.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        BugTrackerComponent,
        BugEditComponent,
        BugStatsComponent,
        ClosedCountPipe
    ],
    imports : [
        UtilsModule,
        HttpClientModule,
        CommonModule
    ],
    exports : [
        BugTrackerComponent
    ],
    providers : [
        BugOperationsService,
        BugApiService
    ]
})
export class BugTrackerModule{

}