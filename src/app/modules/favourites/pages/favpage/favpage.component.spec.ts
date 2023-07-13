import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavpageComponent } from './favpage.component';

describe('FavpageComponent', () => {
  let component: FavpageComponent;
  let fixture: ComponentFixture<FavpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavpageComponent]
    });
    fixture = TestBed.createComponent(FavpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
