import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaFormFolderComponent } from './schema-form-folder.component';

describe('SchemaFormFolderComponent', () => {
  let component: SchemaFormFolderComponent;
  let fixture: ComponentFixture<SchemaFormFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemaFormFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaFormFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
