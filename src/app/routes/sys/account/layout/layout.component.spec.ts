import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysAccountsLayoutComponent } from './layout.component';

describe('SysAccountsLayoutComponent', () => {
  let component: SysAccountsLayoutComponent;
  let fixture: ComponentFixture<SysAccountsLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysAccountsLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysAccountsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
