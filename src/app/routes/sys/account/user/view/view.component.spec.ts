import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAccountUserViewComponent } from './view.component';

describe('SysAccountUserViewComponent', () => {
  let component: SysAccountUserViewComponent;
  let fixture: ComponentFixture<SysAccountUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysAccountUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysAccountUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
