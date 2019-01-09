import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAccountUserComponent } from './user.component';

describe('SysAccountUserComponent', () => {
  let component: SysAccountUserComponent;
  let fixture: ComponentFixture<SysAccountUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysAccountUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysAccountUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
