import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReceiverComponent } from './edit-receiver.component';

describe('EditReceiverComponent', () => {
  let component: EditReceiverComponent;
  let fixture: ComponentFixture<EditReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditReceiverComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
