import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateAdminEmployeeGuard } from '../../guards/validate-admin-employee.guard';
import { Additional } from '../../interfaces/additional.interface';
import { Suggestion } from '../../interfaces/suggestion.interface';
import { AdditionalService } from '../../services/additional.service';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styles: [],
})
export class AdditionalComponent implements OnInit {
  constructor(
    private additionalService: AdditionalService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private scroller: ViewportScroller,
    private validateAdminEmployeeGuard: ValidateAdminEmployeeGuard
  ) {}
  listAdditionals!: any;
  editAdditional!: Additional;
  validateUser: boolean = false;
  showDetails = false;
  ngOnInit(): void {
    this.validateUser = this.validateAdminEmployeeGuard.canActivate();

    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.additionalService
        .getAdditionalsByName(params.name)
        .subscribe((showAdditional) => {
          this.router.navigate([], {
            queryParams: { name: null },
          });
          if (showAdditional.data != null) {
            if (showAdditional.data.additional!.length >= 1) {
              this.showDetailAdditional(showAdditional.data.additional![0]);
            }
          }
        });
    });
    this.additionalService.getListAdditionals().subscribe((listAdditionals) => {
      this.listAdditionals = listAdditionals.data.additional;
    });
  }

  listAdditional: Suggestion[] = [];
  search(nameAdditional: string) {
    this.additionalService
      .getAdditionalsByName(nameAdditional)
      .subscribe((result) => {
        this.listAdditional = [];
        if (result.data.additional != null) {
          result.data.additional.forEach((element) => {
            this.listAdditional.push({
              imageUrl: element.imageUrl,
              name: element.name,
              price: element.price,
            });
          });
        }
      });
  }
  showDetailAdditional(additional: Additional) {
    this.editAdditional = additional;
    this.showDetails = true;
    this.scroller.scrollToAnchor('editAdditional');
  }
}
