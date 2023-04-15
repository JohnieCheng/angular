import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardingDataChildComponent } from './sharding-data-child.component';

describe('ShardingDataChildComponent', () => {
  let component: ShardingDataChildComponent;
  let fixture: ComponentFixture<ShardingDataChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShardingDataChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShardingDataChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
