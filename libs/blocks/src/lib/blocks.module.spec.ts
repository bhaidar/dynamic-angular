import { async, TestBed } from '@angular/core/testing';
import { BlocksModule } from './blocks.module';

describe('BlocksModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BlocksModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(BlocksModule).toBeDefined();
  });
});
