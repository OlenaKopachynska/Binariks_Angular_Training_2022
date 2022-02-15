import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/product.service";
import {IProduct} from "../../models/IProduct";
import {faArrowDown} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: IProduct[] = [];
  faArrowDown = faArrowDown;
  rotateIconTitle: boolean = false;
  rotateIconPrice: boolean = false;
  rotateIconCategory: boolean = false;

  constructor(private _productService: ProductService) {
  }

  ngOnInit() {
    this._productService.getProducts().subscribe(data => this.products = data)
  }

  onDelete(product: IProduct) {
    this._productService.deleteProduct(product).subscribe(() => this.products = this.products.filter((p) => {
      return p.id !== product.id;
    }))
  }

  addProduct(product: IProduct) {
    this._productService.addProduct(product).subscribe((product) => {
      this.products.push(product)
    })
  }

  sortByParam(columnName: keyof IProduct) {

    switch (columnName) {
      case 'title': {
        if (!this.rotateIconTitle) {

          this.products.sort((a, b) => (a[columnName] < b[columnName] ? 1 : -1));
          this.rotateIconTitle = !this.rotateIconTitle;

        } else {

          this.products.sort((a, b) => (a[columnName] < b[columnName] ? -1 : 1));
          if (columnName === 'title') {
            this.rotateIconTitle = !this.rotateIconTitle;
          }
        }
        break;
      }
      case 'price': {
        if (!this.rotateIconPrice) {

          this.products.sort((a, b) => (a[columnName] < b[columnName] ? 1 : -1));
          this.rotateIconPrice = !this.rotateIconPrice;

        } else {

          this.products.sort((a, b) => (a[columnName] < b[columnName] ? -1 : 1));
          this.rotateIconPrice = !this.rotateIconPrice;

        }
        break;
      }
      case 'category': {
        if (!this.rotateIconCategory) {

          this.products.sort((a, b) => (a[columnName] < b[columnName] ? 1 : -1));
          this.rotateIconCategory = !this.rotateIconCategory;

        } else {
          this.products.sort((a, b) => (a[columnName] < b[columnName] ? -1 : 1));
          this.rotateIconCategory = !this.rotateIconCategory;

        }
        break;
      }

      default: {
        console.log("fff")
        break;
      }
    }


    // sortByParam(columnName: keyof IProduct) {
    //
    //   if (columnName === 'title') {
    //
    //     if (this.rotateIconTitle === false) {
    //       this.products.sort((a, b) => (a[columnName] < b[columnName] ? 1 : -1));
    //       this.rotateIconTitle = !this.rotateIconTitle;
    //
    //     } else {
    //       this.products.sort((a, b) => (a[columnName] < b[columnName] ? -1 : 1));
    //       if (columnName === 'title') {
    //         this.rotateIconTitle = !this.rotateIconTitle;
    //
    //       }
    //     }
    //
    //   } else if (columnName === 'price') {
    //
    //     if (this.rotateIconPrice === false) {
    //       this.products.sort((a, b) => (a[columnName] < b[columnName] ? 1 : -1));
    //       this.rotateIconPrice = !this.rotateIconPrice;
    //
    //     } else {
    //       this.products.sort((a, b) => (a[columnName] < b[columnName] ? -1 : 1));
    //       this.rotateIconPrice = !this.rotateIconPrice;
    //
    //     }
    //   }  else if (columnName === 'category') {
    //
    //     if (this.rotateIconCategory === false) {
    //       this.products.sort((a, b) => (a[columnName] < b[columnName] ? 1 : -1));
    //       this.rotateIconCategory = !this.rotateIconCategory;
    //
    //     } else {
    //       this.products.sort((a, b) => (a[columnName] < b[columnName] ? -1 : 1));
    //       this.rotateIconCategory = !this.rotateIconCategory;
    //
    //     }
    //   }
    //
    // }
  }
}
