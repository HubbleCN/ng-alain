import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAccountManagerEditComponent } from './edit.component';

describe('SysAccountManagerEditComponent', () => {
  let component: SysAccountManagerEditComponent;
  let fixture: ComponentFixture<SysAccountManagerEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysAccountManagerEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysAccountManagerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
