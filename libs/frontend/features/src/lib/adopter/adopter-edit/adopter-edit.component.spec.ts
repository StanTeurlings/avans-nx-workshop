import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdopterEditComponent } from './adopter-edit.component';

describe('AdopterEditComponent', () => {
    let component: AdopterEditComponent;
    let fixture: ComponentFixture<AdopterEditComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AdopterEditComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(AdopterEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
