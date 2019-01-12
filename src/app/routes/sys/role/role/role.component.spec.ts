import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysRoleRoleComponent } from './role.component';

describe('SysRoleRoleComponent', () => {
  let component: SysRoleRoleComponent;
  let fixture: ComponentFixture<SysRoleRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysRoleRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysRoleRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
