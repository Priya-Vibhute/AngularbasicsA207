import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceExamplesComponent } from './service-examples.component';

describe('ServiceExamplesComponent', () => {
  let component: ServiceExamplesComponent;
  let fixture: ComponentFixture<ServiceExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
