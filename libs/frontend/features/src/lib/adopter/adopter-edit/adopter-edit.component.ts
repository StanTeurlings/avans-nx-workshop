import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Adopter } from '@avans-nx-workshop/backend/features';
import { AdopterService } from '@avans-nx-workshop/backend/features';

@Component({
    selector: 'avans-nx-workshop-adopter-edit',
    templateUrl: './adopter-edit.component.html',
    styles: []
})
export class AdopterEditComponent implements OnInit{
    adopterId: string | null = null;
    adopter: Adopter | null = null;

    constructor(
        private route: ActivatedRoute,
        private adopterService: AdopterService,
        private router: Router
    ) {}

    async ngOnInit(): Promise<void> {
        this.route.paramMap.subscribe(async (params) => {
            this.adopterId = params.get('id');
            if (this.adopterId) {
                this.adopter = await this.adopterService.findOne(this.adopterId);
            } else {
                this.adopter = new Adopter();
            }
        });
    }

    onSubmit() {
        if (this.adopterId) {
            if (this.adopter) {
                this.adopterService.update(this.adopterId, this.adopter);
            }
        } else {
            if (this.adopter) {
                this.adopterService.create(this.adopter);
            }
        }
        this.router.navigate(['/adopters']);
    }
}
