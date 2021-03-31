import { ComponentFixture, flush, TestBed, waitForAsync, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BugTrackerComponent } from './bug-tracker.component';
import { BugEditComponent } from './components/bug-edit.component';
import { BugOperationsService } from './services/bugOperations.service';
import mockBugs from '../mockdata/bugs';
import { of } from 'rxjs';

import { BugTrackerModule } from './bug-tracker.module';
import { By } from '@angular/platform-browser';


describe('BugTrackerComponent', () => {
  let component: BugTrackerComponent;
  let fixture: ComponentFixture<BugTrackerComponent>;
  let el : DebugElement ;
  
  beforeEach(waitForAsync (() => {
    TestBed.configureTestingModule({
      imports : [BugTrackerModule]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(BugTrackerComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should get the bugs from the service when initialized", () => {
    let bugOperationsSpy : BugOperationsService = TestBed.inject(BugOperationsService);
    spyOn(bugOperationsSpy, "getAll").and.returnValue(of(mockBugs))
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.bugs.length).toBe(2);
  });
  it("should update the bugs when a new bug created event triggered [from BugEditComponent]", () => {
    let bugOperationsSpy : BugOperationsService = TestBed.inject(BugOperationsService);
    spyOn(bugOperationsSpy, "getAll").and.returnValue(of([]))
    const el = fixture.debugElement;
    fixture.detectChanges();
    const bugEditComponent : BugEditComponent = el.query(By.directive(BugEditComponent)).componentInstance;
    bugEditComponent.created.emit({ id : 100, name : 'Dummy', isClosed : false, createdAt : new Date()});
    expect(component.bugs.length).toBe(1);
  });

});
