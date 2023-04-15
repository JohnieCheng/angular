import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShardingDataParentComponent } from './sharding-data-parent.component';

describe('ShardingDataParentComponent', () => {
  let component: ShardingDataParentComponent;
  let fixture: ComponentFixture<ShardingDataParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShardingDataParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShardingDataParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
