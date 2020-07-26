import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterPropertyBindingComponent } from './counter-property-binding.component';
import { By } from '@angular/platform-browser';

describe('CounterPropertyBindingComponent', () => {
  let component: CounterPropertyBindingComponent;
  let fixture: ComponentFixture<CounterPropertyBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterPropertyBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create create component', () => {
    expect(component).toBeTruthy();
  });

  it('should bind-show-render totalCount', () => {
    component.othersCount=10;
    component.myCount=5;
    fixture.detectChanges();

    let totalCountTextElement=fixture.debugElement.queryAll(By.css('span'));
    let totalCountTextNativeElement:HTMLElement=totalCountTextElement[1].nativeElement;

    expect(totalCountTextNativeElement.getAttribute('class')).toBe('totalCountText');
  });

  it('it should increase total count to 1', () => {

    let btn=fixture.debugElement.query(By.css('.icon-menu-up.count-button'));
    // let input=fixture.debugElement.query()
    btn.triggerEventHandler('click',null);
    expect(component.totalCounts).toBe(1);
  });
  
  
});
