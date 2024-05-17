import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRegistFormComponent } from './auth-regist-form.component';

describe('AuthRegistFormComponent', () => {
  let component: AuthRegistFormComponent;
  let fixture: ComponentFixture<AuthRegistFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthRegistFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthRegistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
