import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaCreateEditComponent } from './persona-create-edit.component';

describe('PersonaCreateEditComponent', () => {
  let component: PersonaCreateEditComponent;
  let fixture: ComponentFixture<PersonaCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaCreateEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonaCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
