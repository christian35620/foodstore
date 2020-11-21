import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcodeDialogComponent } from './newcode-dialog.component';

describe('NewcodeDialogComponent', () => {
  let component: NewcodeDialogComponent;
  let fixture: ComponentFixture<NewcodeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcodeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcodeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
