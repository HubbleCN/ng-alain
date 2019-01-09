import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAccountManagerViewComponent } from './view.component';

describe('SysAccountManagerViewComponent', () => {
  let component: SysAccountManagerViewComponent;
  let fixture: ComponentFixture<SysAccountManagerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysAccountManagerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysAccountManagerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
