import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.css'],
})
export class ApparelComponent implements OnInit {
  products: any
  defaultImage = '~/assets/5TT-02.png'
  order = {
    qty: 0,
    size: '',
  }

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // this.loadProducts()
  }

  // loadProducts() {
  //   this.productsService.getProducts().subscribe((res: any) => {
  //     this.products = res.data
  //   })
  // }

  // addToCart() {
  //   this.productsService.createOrder(this.order).subscribe((res: any) => {
  //     console.log(res)
  //   })
  // }
}
