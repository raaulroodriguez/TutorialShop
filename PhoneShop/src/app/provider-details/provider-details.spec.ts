import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDetails } from './provider-details';

describe('ProviderDetails', () => {
  let component: ProviderDetails;
  let fixture: ComponentFixture<ProviderDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProviderDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
