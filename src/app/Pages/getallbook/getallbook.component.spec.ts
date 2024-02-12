import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbookComponent } from './getallbook.component';

describe('GetallbookComponent', () => {
  let component: GetallbookComponent;
  let fixture: ComponentFixture<GetallbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetallbookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetallbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
