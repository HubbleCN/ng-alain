import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAccountUserEditComponent } from './edit.component';

describe('SysAccountUserEditComponent', () => {
  let component: SysAccountUserEditComponent;
  let fixture: ComponentFixture<SysAccountUserEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysAccountUserEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysAccountUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
