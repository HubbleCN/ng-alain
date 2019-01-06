import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SysUserViewComponent } from './view.component';

describe('SysUserViewComponent', () => {
  let component: SysUserViewComponent;
  let fixture: ComponentFixture<SysUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
