import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillUserDTO } from 'src/app/auth/admin/interfaces/bill.interface';
import { ListUser } from 'src/app/auth/admin/interfaces/user.interface';
import { Product } from 'src/app/auth/admin/interfaces/products.interface';
import { UserInfo } from '../../interfaces/tokenUser.interface';
import { CheckoutService } from '../../services/checkout.service';
import { LoginService } from '../../services/login.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [],
})
export class ProfileComponent implements OnInit {
  constructor(
    private login: LoginService,
    private profileService: ProfileService,
    private checkoutService: CheckoutService,
    private route: Router
  ) {}
  showFields: boolean = false;
  userInfo!: UserInfo;
  listProducts: Product[] = [];
  listBill: BillUserDTO[] = [];
  ngOnInit(): void {
    this.login.getUser().subscribe((user) => {
      this.userInfo = user.data?.user.user!;
      this.profileService
        .getProducts(user.data?.user.user.username!)
        .subscribe((listProduct) => {
          listProduct.data.bill.listBill.forEach((element) => {
            this.listBill.push(element.billUserDTO);
          });
          if (listProduct.data.bill.listBill.length > 0) {
            listProduct.data.bill.listBill[0].ordersDTO.forEach((element) => {
              this.listProducts.push(element.product);
            });
          }
        });
    });
  }
  editUser!: ListUser;
  showInfo() {
    this.showFields = !this.showFields;
    this.editUser = this.userInfo;
  }

  seeBill(idBill: number) {
    this.checkoutService.setTokenBill(idBill);
    this.route.navigateByUrl('/bill');
  }
}
