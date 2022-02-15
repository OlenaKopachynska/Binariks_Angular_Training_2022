import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {IProduct} from "../../models/IProduct";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  @Output() onAddProduct: EventEmitter<IProduct> = new EventEmitter()

  id: number | undefined;
  title: string | undefined;
  price: number | undefined;
  category: string | undefined;


  constructor() {
  }

  ngOnInit(): void {
  }

  onFormSubmit() {

    if (!this.title || !this.price || !this.category) {
      alert("Please fill in all fields")
    }

    const newProduct: any = {
      id: this.id,
      title: this.title,
      price: this.price,
      category: this.category
    }

    this.onAddProduct.emit(newProduct);

  }

}
