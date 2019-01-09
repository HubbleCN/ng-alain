import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysLogLoggingComponent } from './logging.component';

describe('SysLogLoggingComponent', () => {
  let component: SysLogLoggingComponent;
  let fixture: ComponentFixture<SysLogLoggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysLogLoggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysLogLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
