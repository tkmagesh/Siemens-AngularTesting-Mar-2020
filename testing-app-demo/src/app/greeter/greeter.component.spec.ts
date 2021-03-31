import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'
import { By } from '@angular/platform-browser';
import { GreeterComponent } from './greeter.component';

describe("Greeter Component", () => {
    let fixture : ComponentFixture<GreeterComponent>;
    let component : GreeterComponent;
    let el : DebugElement;
    beforeEach(waitForAsync(() => {
         TestBed.configureTestingModule({
            declarations: [ GreeterComponent ]
        })
        .compileComponents()
        .then(() => {
                fixture = TestBed.createComponent(GreeterComponent),
                component = fixture.componentInstance;
                el = fixture.debugElement;
        })
    }));

    it("should create the greeter component", () => {
          expect(component).toBeTruthy();  
    });

    it("should display the message", () => {
        component.message = 'Hi there!';
        fixture.detectChanges();
        let messageEle = el.query(By.css('div.highlight'));
        let span = messageEle.query(By.css('span'));
        expect(span.nativeElement.textContent).toBe('Hi there!')
    });

    it("message element should have the highlight class", () => {
        component.message = 'Hi there!';
        fixture.detectChanges();
        let messageEle = el.query(By.css('div'));
        expect(messageEle.nativeElement.classList.contains('highlight')).toBeTrue();
    });

    /* it("should display the message for the user", () => {
        component.onBtnGreetClick('Magesh');
        fixture.detectChanges();
        let messageEle = el.query(By.css('div.highlight'));
        let span = messageEle.query(By.css('span'));
        expect(span.nativeElement.textContent).toBe('Hi Magesh, Have a nice day!');
    }); */

    it("should display the message for the userName in the textbox", () => {
        let textBoxEle = el.query(By.css('input[type="text"]'));
        
        //textBoxEle.triggerEventHandler('input', { target : { value : 'Magesh'}});
        
        textBoxEle.nativeElement.value = "Magesh";
        textBoxEle.triggerEventHandler('input', { target : textBoxEle.nativeElement })
        fixture.detectChanges();

        let btnGreet = el.query(By.css('#btnGreet'));
        btnGreet.triggerEventHandler('click', { button : 0 });
        fixture.detectChanges();

        let messageEle = el.query(By.css('div.highlight'));
        let span = messageEle.query(By.css('span'));
        expect(span.nativeElement.textContent).toBe('Hi Magesh, Have a nice day!');
    });
})