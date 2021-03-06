import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateAdminEmployeeGuard } from '../../guards/validate-admin-employee.guard';
import { Category } from '../../interfaces/category.interface';
import { Suggestion } from '../../interfaces/suggestion.interface';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styles: [],
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private scroller: ViewportScroller,
    private validateAdminEmployeeGuard: ValidateAdminEmployeeGuard
  ) {}
  listCategories!: Category[];
  listCategory: Suggestion[] = [];
  editCategory!: Category;
  showDetails = false;
  validateUser: boolean = false;

  ngOnInit(): void {
    this.validateUser = this.validateAdminEmployeeGuard.canActivate();
    this.activatedRoute.queryParams.subscribe((params: any) => {
      this.categoryService
        .getByNameCategories(params.name)
        .subscribe((showCategory) => {
          this.router.navigate([], {
            queryParams: { name: null },
          });
          if (showCategory.data != null) {
            if (showCategory.data.category!.length >= 1) {
              this.showDetailCategory(showCategory.data.category![0]);
            }
          }
        });
    });
    this.categoryService.getCategories().subscribe((listCategories) => {
      this.listCategories = listCategories.data.category;
    });
  }

  search(nameAdditional: string) {
    this.categoryService
      .getByNameCategories(nameAdditional)
      .subscribe((result) => {
        this.listCategory = [];
        if (result.data.category != null) {
          result.data.category.forEach((element) => {
            this.listCategory.push({
              imageUrl: element.imageUrl,
              name: element.name,
            });
          });
        }
      });
  }

  showDetailCategory(category: Category) {
    this.editCategory = category;
    this.showDetails = true;
    this.scroller.scrollToAnchor('editCategory');
  }
}
