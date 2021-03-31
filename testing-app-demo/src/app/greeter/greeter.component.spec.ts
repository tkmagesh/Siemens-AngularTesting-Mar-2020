import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { By } from '@angular/platform-browser';
import { GreeterComponent } from './greeter.component';

describe("Greeter Component", () => {
    let fixture : ComponentFixture<GreeterComponent>;
    let component : GreeterComponent;

    beforeEach(waitForAsync(() => {
         TestBed.configureTestingModule({
            declarations: [ GreeterComponent ]
        })
        .compileComponents()
        .then(() => {
                fixture = TestBed.createComponent(GreeterComponent),
                component = fixture.componentInstance;
        })
    }));

    it("should create the greeter component", () => {
          expect(component).toBeTruthy();  
    });

    it("should display the message", () => {
        component.message = 'Hi there!';
        fixture.detectChanges();
        let el : DebugElement = fixture.debugElement;
        let messageEle = el.query(By.css('div.highlight'));
        expect(messageEle.nativeElement.textContent).toBe('Hi there!')
    })
})