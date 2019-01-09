import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysLogLayoutComponent } from './layout.component';

describe('SysLogLayoutComponent', () => {
  let component: SysLogLayoutComponent;
  let fixture: ComponentFixture<SysLogLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysLogLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysLogLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
