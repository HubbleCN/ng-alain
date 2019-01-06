import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysOperationsComponent } from './operations.component';

describe('SysOperationsComponent', () => {
  let component: SysOperationsComponent;
  let fixture: ComponentFixture<SysOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
