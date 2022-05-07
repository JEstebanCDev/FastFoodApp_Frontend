import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { BillComponent } from './pages/bill/bill.component';
import { GraficsComponent } from './pages/grafics/grafics.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AdminbodyComponent } from './adminbody/adminbody.component';
import { SearchComponent } from './components/search/search.component';
import { HomeProductsDetailsComponent } from './components/home-products-details/home-products-details.component';
import { HomeSideOrderComponent } from './components/home-side-order/home-side-order.component';
import { ProductsCardComponent } from './components/products-card/products-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdditionalComponent } from './pages/additional/additional.component';
import { CategoryComponent } from './pages/category/category.component';
import { AdditionalCardComponent } from './components/additional-card/additional-card.component';
import { ProductSideComponent } from './components/product-side/product-side.component';
import { AdditionalSideComponent } from './components/additional-side/additional-side.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategorySideComponent } from './components/category-side/category-side.component';
import { BillCardComponent } from './components/bill-card/bill-card.component';
import { BillModalComponent } from './components/bill-modal/bill-modal.component';
import { UserComponent } from './pages/user/user.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserSideComponent } from './components/user-side/user-side.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    BillComponent,
    GraficsComponent,
    SettingsComponent,
    SidebarComponent,
    AdminbodyComponent,
    SearchComponent,
    HomeProductsDetailsComponent,
    HomeSideOrderComponent,
    ProductsCardComponent,
    AdditionalComponent,
    CategoryComponent,
    AdditionalCardComponent,
    ProductSideComponent,
    AdditionalSideComponent,
    CategoryCardComponent,
    CategorySideComponent,
    BillCardComponent,
    BillModalComponent,
    UserComponent,
    UserCardComponent,
    UserSideComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AdminModule {}
