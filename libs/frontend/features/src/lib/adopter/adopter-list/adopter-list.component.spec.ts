import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdopterListComponent } from './adopter-list.component';

describe('AdopterListComponent', () => {
    let component: AdopterListComponent;
    let fixture: ComponentFixture<AdopterListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdopterListComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AdopterListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
