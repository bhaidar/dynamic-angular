import { async, TestBed } from '@angular/core/testing';
import { AdminWrapperModule } from './admin-wrapper.module';

describe('AdminWrapperModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminWrapperModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AdminWrapperModule).toBeDefined();
  });
});
