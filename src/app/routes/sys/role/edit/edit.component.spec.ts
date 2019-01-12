import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysRoleEditComponent } from './edit.component';

describe('SysRoleEditComponent', () => {
  let component: SysRoleEditComponent;
  let fixture: ComponentFixture<SysRoleEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysRoleEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysRoleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
