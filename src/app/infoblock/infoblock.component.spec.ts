import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoblockComponent } from './infoblock.component';

describe('InfoblockComponent', () => {
  let component: InfoblockComponent;
  let fixture: ComponentFixture<InfoblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
