import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.css'],
})
export class TournamentsComponent implements OnInit {
  products: any

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.productsService.getProducts().subscribe((res: any) => {
      this.products = res.data

      console.log(this.products)
    })
  }
}
