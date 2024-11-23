import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdopterDetailComponent } from './adopter-detail.component';

describe('AdopterDetailComponent', () => {
    let component: AdopterDetailComponent;
    let fixture: ComponentFixture<AdopterDetailComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdopterDetailComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AdopterDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
