import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAccountManagerComponent } from './manager.component';

describe('SysAccountManagerComponent', () => {
  let component: SysAccountManagerComponent;
  let fixture: ComponentFixture<SysAccountManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysAccountManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysAccountManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
